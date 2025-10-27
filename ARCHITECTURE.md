# 🏗️ Architecture Documentation

Bu fayl loyihaning arxitekturasi, dizayn qarorlari va implementation detaillarini tushuntiradi.

---

## 📐 System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                       Browser                            │
│  (User Interface - React Components + Tailwind CSS)     │
└────────────┬────────────────────────────────────────────┘
             │
             │ HTTP Request
             ↓
┌─────────────────────────────────────────────────────────┐
│                    Next.js Edge                          │
│                    Middleware                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 1. Check Cookie (auth-token)                    │   │
│  │ 2. Route Analysis (private/public)              │   │
│  │ 3. Redirect if needed                           │   │
│  │ 4. Add headers                                  │   │
│  └─────────────────────────────────────────────────┘   │
└────────────┬────────────────────────────────────────────┘
             │
             │ Allowed Request
             ↓
┌─────────────────────────────────────────────────────────┐
│                  Next.js App Router                      │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Server     │  │   Client     │  │     API      │ │
│  │  Components  │  │  Components  │  │    Routes    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                          │
│  Error Handling:                                         │
│  🔴 global-error.tsx (Root layout)                      │
│  🔵 error.tsx (Page level)                              │
│  🟢 try-catch (Component level)                         │
└─────────────────────────────────────────────────────────┘
             │
             │ State Management
             ↓
┌─────────────────────────────────────────────────────────┐
│                  React Context                           │
│                  (AuthContext)                           │
│                                                          │
│  - user: { name, email } | null                         │
│  - isAuthenticated: boolean                             │
│  - login(email, password): Promise<boolean>             │
│  - logout(): void                                       │
└─────────────────────────────────────────────────────────┘
```

---

## 🔐 Authentication Flow

### 1. Login Process

```
User Form Input
     ↓
AuthContext.login()
     ↓
POST /api/auth/login
     ↓
Validation (6+ chars password)
     ↓
Generate Token (random UUID)
     ↓
Set Cookie
  - Name: auth-token
  - HttpOnly: true
  - Secure: production only
  - SameSite: lax
  - Path: /
  - Max-Age: 7 days
     ↓
Return success
     ↓
Update AuthContext state
     ↓
Redirect to ?redirect or /dashboard
```

### 2. Authentication Check (Middleware)

```
Request arrives
     ↓
Middleware intercepts (matcher config)
     ↓
Extract cookie: request.cookies.get('auth-token')
     ↓
Check if exists: !!token
     ↓
┌────────────────────────┐
│ Is Private Route?      │
│ /dashboard, /profile   │
└────┬───────────────────┘
     │
  ┌──▼─────────────┐
  │ Authenticated? │
  └──┬─────────────┘
     │
     │ NO → Redirect /login?redirect={pathname}
     │ YES → Continue
     ↓
Page renders
```

### 3. Logout Process

```
User clicks Logout
     ↓
AuthContext.logout()
     ↓
POST /api/auth/logout
     ↓
Delete Cookie (Max-Age: 0)
     ↓
Clear AuthContext state
     ↓
Redirect to /
```

---

## ⚠️ Error Handling Architecture

### 3-Level Hierarchy

```
┌─────────────────────────────────────────────────┐
│            🔴 LEVEL 1: Global Error             │
│                                                 │
│  File: app/global-error.tsx                    │
│  Scope: Root layout errors                     │
│  Must include: <html> and <body> tags          │
│                                                 │
│  When triggered:                                │
│  - Root layout throws error                     │
│  - Replaces entire app                          │
│                                                 │
│  Example: /global-error-test                    │
└──────────────────┬──────────────────────────────┘
                   │
     ┌─────────────▼──────────────┐
     │  🔵 LEVEL 2: Page Error    │
     │                            │
     │  File: app/error.tsx       │
     │  Scope: Page level         │
     │  Client Component required │
     │                            │
     │  When triggered:           │
     │  - Server Component error  │
     │  - Page render error       │
     │  - Does NOT catch layout   │
     │                            │
     │  Example: /server-error-test?error=500
     └────────────┬───────────────┘
                  │
       ┌──────────▼────────────┐
       │ 🟢 LEVEL 3: Component │
       │                       │
       │  Implementation:      │
       │  - try-catch blocks   │
       │  - ErrorBoundary      │
       │  Scope: Component     │
       │                       │
       │  When triggered:      │
       │  - API fetch errors   │
       │  - User actions       │
       │  - Client logic       │
       │                       │
       │  Example: /client-error-test
       └───────────────────────┘
```

### Decision Tree: Which Error Handler?

```
Error occurs
     ↓
Where did it happen?
     ↓
┌────┴─────────────────────────────────────────┐
│                                              │
│  In Root Layout?                             │
│  (app/layout.tsx)                            │
│                                              │
│  YES → global-error.tsx (Level 1)           │
│  NO → Continue                               │
└────┬─────────────────────────────────────────┘
     │
     │
┌────▼─────────────────────────────────────────┐
│                                              │
│  In Server Component or Page?                │
│  (Server-side render)                        │
│                                              │
│  YES → error.tsx (Level 2)                  │
│  NO → Continue                               │
└────┬─────────────────────────────────────────┘
     │
     │
┌────▼─────────────────────────────────────────┐
│                                              │
│  In Client Component?                        │
│  (Browser-side logic)                        │
│                                              │
│  YES → try-catch or ErrorBoundary (Level 3) │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 📁 File Organization

### Route Groups

```
app/
├── (public)/           # Route group - URL'ga ta'sir qilmaydi
│   └── login/          # Actual URL: /login (NOT /public/login)
│       └── page.tsx
│
├── (protected)/        # Route group - middleware bilan himoyalangan
│   └── profile/        # Actual URL: /profile
│       └── page.tsx    # Middleware checks auth before render
│
└── [other-pages]/      # Normal routes
    └── page.tsx
```

**Why Route Groups?**
1. Logical organization (public vs protected)
2. URL structure unchanged (`/login`, not `/public/login`)
3. Easier to manage middleware matcher
4. Clear separation of concerns

---

## 🎯 Component Architecture

### Server vs Client Components

```
┌─────────────────────────────────────────────────────────┐
│                   Server Components                      │
│  (Default in App Router)                                 │
│                                                          │
│  - Run on server only                                    │
│  - No useState, useEffect, event handlers               │
│  - Can use async/await directly                          │
│  - Access to server resources (DB, file system)         │
│                                                          │
│  Examples:                                               │
│  - app/server-error-test/page.tsx                       │
│  - Data fetching pages                                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   Client Components                      │
│  (Must use 'use client' directive)                      │
│                                                          │
│  - Run in browser                                        │
│  - Can use hooks (useState, useEffect)                   │
│  - Event handlers (onClick, onChange)                    │
│  - Interactive UI                                        │
│                                                          │
│  Examples:                                               │
│  - app/client-error-test/page.tsx                       │
│  - app/(public)/login/page.tsx                          │
│  - app/error.tsx (MUST be client)                       │
│  - app/global-error.tsx (MUST be client)                │
│  - contexts/AuthContext.tsx                             │
└─────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
app/layout.tsx (Server Component)
   ├── AuthProvider (Client - Context)
   │     ├── Navigation (if exists)
   │     └── {children}
   │           ├── Server Component Pages
   │           │     └── error.tsx (if error)
   │           │
   │           └── Client Component Pages
   │                 └── try-catch or ErrorBoundary
   │
   └── global-error.tsx (if layout error)
```

---

## 🔄 Request Lifecycle

### Normal Request (Authenticated User, Private Route)

```
1. User navigates to /profile
2. Browser sends GET request
3. Middleware intercepts (matcher: /profile/:path*)
4. Check cookie: auth-token exists ✅
5. isAuthenticated = true
6. isPrivateRoute = true
7. No redirect needed → Continue
8. Next.js renders page (Server Component)
9. HTML sent to browser
10. Client hydration (if Client Components exist)
11. Page interactive
```

### Protected Request (Unauthenticated User)

```
1. User navigates to /profile
2. Browser sends GET request
3. Middleware intercepts
4. Check cookie: auth-token does NOT exist ❌
5. isAuthenticated = false
6. isPrivateRoute = true
7. Redirect to /login?redirect=/profile
8. Browser redirects
9. Login page renders
10. User logs in
11. Cookie set
12. Redirect to /profile (from ?redirect param)
13. Middleware allows (authenticated now)
14. Profile page renders
```

### Error Request (Server Component Throws)

```
1. User navigates to /server-error-test?error=500
2. Middleware allows (no auth required)
3. Server Component starts rendering
4. Reads searchParams: error=500
5. Throws error: new Error('Server error')
6. Next.js catches error
7. Looks for error.tsx in same segment
8. error.tsx renders (Client Component)
9. Fallback UI sent to browser
10. User sees error page
11. User clicks "Retry"
12. URL cleaned: /server-error-test
13. Page re-renders successfully
```

---

## 🍪 Cookie Management

### Structure

```javascript
{
  name: 'auth-token',
  value: crypto.randomUUID(), // e.g., "a1b2c3d4-..."
  httpOnly: true,              // Cannot be read by JavaScript
  secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
  sameSite: 'lax',             // CSRF protection
  path: '/',                   // Available for all routes
  maxAge: 60 * 60 * 24 * 7,   // 7 days
}
```

### Security Considerations

| Feature | Purpose | Implementation |
|---------|---------|----------------|
| **HttpOnly** | Prevent XSS attacks | JavaScript cannot access cookie |
| **Secure** | Encrypt in transit | Only sent over HTTPS (production) |
| **SameSite** | Prevent CSRF | Cookie not sent on cross-site requests |
| **Path** | Scope limitation | Available only for specified paths |
| **MaxAge** | Auto-expiration | Cookie deleted after 7 days |

---

## 🛣️ Routing Strategy

### Middleware Matcher

```typescript
export const config = {
  matcher: [
    '/dashboard/:path*',  // Matches /dashboard, /dashboard/settings, etc.
    '/profile/:path*',    // Matches /profile, /profile/edit, etc.
    '/login',             // Exact match only
    '/register',          // Exact match only
  ],
};
```

**Performance Benefit:**
- Middleware only runs on specified routes
- Other routes bypass middleware completely
- Reduces Edge compute time
- Faster response for public pages

### Alternative (Not Recommended)

```typescript
// ❌ BAD: Runs on ALL routes
export const config = {
  matcher: '/:path*',
};

// Then check inside middleware
if (pathname.startsWith('/api')) return; // Skip API
if (pathname.startsWith('/_next')) return; // Skip Next.js internals
// ... many more checks
```

**Why bad?**
- Runs on every request (images, fonts, API, etc.)
- More Edge compute time
- More conditional logic
- Harder to maintain

---

## 🎨 UI/UX Design Decisions

### 1. Progressive Enhancement

- Server Components for initial render (fast)
- Client Components for interactivity
- Graceful error handling (don't break entire page)

### 2. Error UI Philosophy

```
🔴 Global Error (Critical)
   → Replaces entire app
   → Clear "something went very wrong" message
   → Big, prominent retry button
   → Link to home page

🔵 Page Error (Important)
   → Replaces page content
   → Explain what happened
   → Retry button (cleans URL)
   → Option to go home

🟢 Component Error (Graceful)
   → Keep page working
   → Show error message inline
   → User can continue using other features
   → No page refresh needed
```

### 3. Visual Hierarchy

```
Home Page
├── Header (gradient, large title)
├── Test Cards (grid, interactive)
│   ├── Client Error (green)
│   ├── Server Error (blue)
│   ├── Global Error (red)
│   └── Middleware Auth (purple)
├── Info Sections (2-column)
│   ├── Error Handling Hierarchy
│   └── Middleware Protection
└── Footer (simple text)
```

---

## 🧪 Testing Strategy

### Manual Testing Checklist

**Authentication:**
- [ ] Unauthenticated → /profile → Redirects to /login
- [ ] Login → Redirects to ?redirect URL
- [ ] Authenticated → /login → Redirects to /dashboard
- [ ] Cookie persists after refresh
- [ ] Logout clears cookie

**Client Errors:**
- [ ] Try-catch shows error, page works
- [ ] Throw triggers ErrorBoundary
- [ ] Retry after throw works
- [ ] Can test multiple errors in sequence

**Server Errors:**
- [ ] ?error=500 triggers error.tsx
- [ ] Retry cleans URL
- [ ] Different error codes work
- [ ] Normal page after retry

**Global Errors:**
- [ ] Layout error triggers global-error.tsx
- [ ] Critical UI displayed
- [ ] Retry goes to home
- [ ] HTML/body tags present

---

## 📊 Performance Considerations

### 1. Middleware Optimization

- **Edge Runtime**: Middleware runs on Edge (close to user)
- **Minimal Logic**: Only cookie check + redirect
- **No Database**: Cookie-based, no DB lookup
- **Matcher**: Only runs on specified routes

### 2. Component Strategy

- **Server Components**: Default for data fetching
- **Client Components**: Only when needed (interactivity)
- **Code Splitting**: Automatic per route
- **Lazy Loading**: Not needed (already optimized)

### 3. Error Boundaries

- **Granular**: Component-level for graceful degradation
- **Page-level**: Catch server errors
- **Global**: Last resort for critical failures

---

## 🔮 Future Enhancements

### Potential Additions

1. **Database Integration**
   - PostgreSQL/MySQL for user storage
   - Prisma ORM
   - Real session management

2. **Advanced Auth**
   - JWT tokens
   - Refresh tokens
   - OAuth providers (Google, GitHub)

3. **Error Monitoring**
   - Sentry integration
   - Error logging service
   - User session replay

4. **Testing**
   - Jest unit tests
   - Playwright E2E tests
   - Cypress component tests

5. **CI/CD**
   - GitHub Actions
   - Automated testing
   - Vercel deployment

---

## 📖 Learning Resources

### Related Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

---

## 🏁 Summary

Bu loyihada quyidagi arxitektura qarorlari qabul qilingan:

1. **Cookie-based Auth** - Simple, effective, no DB needed for demo
2. **3-Level Error Handling** - Comprehensive coverage (global → page → component)
3. **Route Groups** - Clean organization (public vs protected)
4. **Middleware Matcher** - Performance optimization
5. **Server-First** - Fast initial render, progressive enhancement
6. **Graceful Degradation** - Errors don't break entire app

**Trade-offs:**
- ✅ Simple to understand
- ✅ Production-like patterns
- ✅ Educational value
- ⚠️ Not production-ready (no real DB, basic auth)
- ⚠️ Demo-focused (some simplifications)

**Purpose:** Education and demonstration, not production deployment.
