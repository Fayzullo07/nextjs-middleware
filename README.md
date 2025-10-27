# 🚀 Next.js Middleware & Error Handling Demo

> **Test loyiha**: Next.js middleware, authentication, multi-level error handling va route protection professional namoyishi

Bu loyiha Next.js 14+ App Router'da quyidagilarni qanday implement qilishni **to'liq** ko'rsatadi:
- ✅ Middleware bilan authentication va route protection
- ✅ Public va Private route groups
- ✅ **3-level** error handling (Global → Page → Client)
- ✅ Cookie-based session management
- ✅ Auth redirect with return URL
- ✅ Production-ready UI/UX

---

## 📋 Mundarija

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Loyiha Strukturasi](#-loyiha-strukturasi)
- [Demo Sahifalar](#-demo-sahifalar)
- [Middleware](#-middleware-qanday-ishlaydi)
- [Error Handling](#-error-handling-3-level)
- [Test Qilish](#-test-qilish-guide)
- [Architecture](#-architecture)
- [Production Notes](#-production-notes)

---

## ⚡ Quick Start

### 1. Installation

```bash
# Clone repository
git clone https://github.com/Fayzullo07/nextjs-middleware.git
cd nextjs-middleware

# Install dependencies
npm install

# Run development server
npm run dev
```

### 2. Brauzerni oching
```
http://localhost:3000
```

**Bosh sahifada** barcha test sahifalari ko'rsatiladi - har birini bosib sinab ko'ring!

---

## ✨ Features

### 🔐 1. Middleware Authentication

```typescript
Features:
✅ Cookie-based authentication (auth-token)
✅ Private route protection (/profile, /dashboard)
✅ Auto redirect to login for unauthenticated users
✅ Return URL after login (?redirect=/profile)
✅ Prevent authenticated users from accessing login page
✅ Edge Runtime optimized
```

### ⚠️ 2. Multi-Level Error Handling

| Daraja | Fayl | Qachon? | Scope | UI |
|--------|------|---------|-------|-----|
| 🔴 **Level 1** | `global-error.tsx` | Root layout errors | Butun app | Critical error page |
| 🔵 **Level 2** | `error.tsx` | Server Component errors | Page level | Error fallback |
| 🟢 **Level 3** | try-catch / ErrorBoundary | Client errors | Component | Graceful handling |

### 🎨 3. Production-Ready UI

- Chiroyli, zamonaviy dizayn (Tailwind CSS)
- Responsive layout (mobile, tablet, desktop)
- Interactive animations
- Clear error messages
- User-friendly navigation

### 📁 4. Route Groups

```
(public)    - Public pages (/login)
(protected) - Private pages (/profile, /dashboard)
```

---

## 📁 Loyiha Strukturasi

```
nextjs-middleware/
├── app/
│   ├── (public)/                  # 🌐 Public route group
│   │   └── login/
│   │       └── page.tsx           # Login page
│   │
│   ├── (protected)/               # 🔒 Protected route group
│   │   └── profile/
│   │       └── page.tsx           # Profile page (auth required)
│   │
│   ├── client-error-test/         # 🟢 Client error demo
│   │   └── page.tsx               # Try-catch vs ErrorBoundary
│   │
│   ├── server-error-test/         # 🔵 Server error demo
│   │   └── page.tsx               # Server Component errors
│   │
│   ├── global-error-test/         # 🔴 Global error demo
│   │   ├── layout.tsx             # Layout throws error
│   │   └── page.tsx               # Never renders
│   │
│   ├── api/
│   │   ├── auth/login/route.ts    # Login API
│   │   ├── auth/logout/route.ts   # Logout API
│   │   └── test-error/route.ts    # Error simulation API
│   │
│   ├── layout.tsx                 # Root layout + AuthProvider
│   ├── error.tsx                  # 🔵 Page-level error handler
│   ├── global-error.tsx           # 🔴 Global error handler
│   ├── not-found.tsx              # 404 page
│   └── page.tsx                   # 🏠 Home dashboard
│
├── contexts/
│   └── AuthContext.tsx            # Auth state management
│
├── middleware.ts                  # 🔐 Authentication middleware
├── README.md                      # 📖 Bu fayl
└── package.json
```

---

## 🎯 Demo Sahifalar

### 🏠 Bosh sahifa (`/`)

**4 ta test kartasi:**

1. **🟢 Client Error Test** - Client component error handling
2. **🔵 Server Error Test** - Server component errors
3. **🔴 Global Error Test** - Root layout errors
4. **🟣 Middleware Auth** - Login va route protection

**2 ta info bo'limi:**
- Error Handling Hierarchy
- Middleware Protection Features

---

### 🟢 Client Error Test (`/client-error-test`)

**Maqsad**: Client Component'da 2 xil error handling yondashuvini taqqoslash

**Test tugmalari:**

| Yondashuv | Tugma | Natija |
|-----------|-------|--------|
| **Try-Catch** | Success, 500, 404, 401 | Graceful - sahifa ishlaydi |
| **Throw** | Success, 500 | ErrorBoundary - fallback UI |

**Nima o'rganasiz:**
- `try-catch` - API errors'ni gracefully handle qilish
- `throw` - ErrorBoundary trigger qilish
- Qaysi yondashuvni qachon ishlatish

**Taqqoslash jadvali:**
- Error handling mexanizmi
- User experience
- Kod miqdori
- Best practices

---

### 🔵 Server Error Test (`/server-error-test`)

**Maqsad**: Server Component'da error throw va `error.tsx` ishlashini ko'rsatish

**Test tugmalari:**

| Tugma | URL | Natija |
|-------|-----|--------|
| Success | `/server-error-test` | Normal page |
| 500 Error | `?error=500` | error.tsx triggers |
| 404 Error | `?error=404` | error.tsx triggers |
| 401 Error | `?error=401` | error.tsx triggers |

**Jarayon (Step-by-Step):**
1. Server Component render
2. Query parameter tekshiriladi
3. Error throw qilinadi
4. error.tsx avtomatik ishga tushadi
5. Fallback UI ko'rsatiladi
6. "Qayta urinish" → URL tozalanadi → Normal page

**Nima o'rganasiz:**
- Server Component error handling
- `error.tsx` special file
- Query parameter based errors
- URL cleanup on retry

---

### 🔴 Global Error Test (`/global-error-test`)

**Maqsad**: Root layout error va `global-error.tsx` ishlashini ko'rsatish

**Qanday ishlaydi:**
1. Layout'da error throw qilinadi
2. `global-error.tsx` **butun page'ni** almashtiradi
3. Critical error UI ko'rsatiladi (with `<html>` and `<body>`)
4. "Qayta urinish" yoki "Bosh sahifa" tugmalari

**MUHIM:**
- `global-error.tsx` must include `<html>` and `<body>` tags
- Root layout'ni almashtiradi
- Production'da to'liq ishlaydi
- Development'da Next.js overlay ko'rsatilishi mumkin

**Nima o'rganasiz:**
- Global error handling
- Root layout error recovery
- Critical error UI design

---

### 🟣 Middleware Auth (`/login` → `/profile`)

**Maqsad**: Middleware authentication va route protection

**Test flow:**

```
1. /profile ga o'ting (not authenticated)
   ↓
2. Redirect → /login?redirect=/profile
   ↓
3. Email va parol kiriting (6+ chars)
   ↓
4. Cookie set → auth-token
   ↓
5. Redirect → /profile (authenticated ✅)
   ↓
6. Yana /login ga harakat → Redirect /dashboard
```

**Nima o'rganasiz:**
- Middleware route protection
- Cookie-based authentication
- Return URL after login
- Double redirect prevention

---

## 🔐 Middleware Qanday Ishlaydi?

### File: `middleware.ts`

```typescript
const privateRoutes = ['/dashboard', '/profile'];
const authRoutes = ['/login'];

export function middleware(request: NextRequest) {
  // 1. Cookie'dan token olish
  const token = request.cookies.get('auth-token')?.value;
  const isAuthenticated = !!token;

  // 2. Route type aniqlash
  const isPrivateRoute = privateRoutes.some(r => pathname.startsWith(r));
  const isAuthRoute = authRoutes.some(r => pathname.startsWith(r));

  // 3. Private route protection
  if (isPrivateRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname); // Return URL
    return NextResponse.redirect(loginUrl);
  }

  // 4. Auth route redirect (prevent authenticated users)
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}
```

### Config (Performance Optimization)

```typescript
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/login',
  ],
};
```

**Faqat kerakli route'larda** middleware ishlaydi - barcha request'larda emas!

---

## ⚠️ Error Handling (3-Level)

### 🔴 Level 1: Global Error (`global-error.tsx`)

**Qachon:** Root layout'da error

```typescript
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>  {/* MUHIM: html va body kerak! */}
      <body>
        <div>Critical Error!</div>
        <p>{error.message}</p>
        <button onClick={reset}>Retry</button>
      </body>
    </html>
  );
}
```

**Feature:**
- URL parametrlarni tozalaydi
- Butun app'ni qamrab oladi
- Must include `<html>` and `<body>`

---

### 🔵 Level 2: Page Error (`error.tsx`)

**Qachon:** Server Component yoki page render paytida

```typescript
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => {
        // URL parametrlarni tozalash
        const url = new URL(window.location.href);
        if (url.searchParams.has('error')) {
          url.searchParams.delete('error');
          window.location.href = url.toString();
        } else {
          reset();
        }
      }}>Retry</button>
    </div>
  );
}
```

**Feature:**
- Must be Client Component
- URL cleanup on retry
- Automatic error boundary

---

### 🟢 Level 3: Client Error (try-catch)

**Qachon:** API fetch yoki client-side operations

```typescript
// Graceful error handling
try {
  const response = await fetch('/api/data');
  if (!response.ok) {
    setError('Failed to fetch'); // State'ga saqla
    return;
  }
  const data = await response.json();
  setData(data);
} catch (error) {
  setError(error.message);
}

// YO'Q throw qilmang - sahifa ishlashda davom etadi!
```

**Afzallik:**
- Sahifa buzilmaydi
- User interaction davom etadi
- Graceful degradation

---

## 🧪 Test Qilish (Guide)

### Test 1: Middleware Authentication

```bash
✅ Step 1: Unauthenticated access
1. Browser'da /profile ga o'ting
2. Redirect bo'lishini kuzating → /login?redirect=/profile
3. URL'da redirect parametr borligini tekshiring

✅ Step 2: Login
1. Email: test@example.com
2. Password: 123456 (6+ chars)
3. "Kirish" tugmasini bosing
4. Redirect → /profile (return URL!)

✅ Step 3: Authenticated state
1. DevTools → Application → Cookies
2. "auth-token" cookie borligini tekshiring
3. /login ga o'ting
4. Redirect → /dashboard (double redirect prevention)

✅ Step 4: Logout
1. Profile page'da "Logout" ni bosing (agar bo'lsa)
2. Cookie o'chiriladi
3. /profile ga qayta o'ting
4. Redirect → /login
```

### Test 2: Client Error Handling

```bash
✅ Try-Catch Method
1. /client-error-test ga o'ting
2. "500 Error" tugmasini bosing (Try-Catch section)
3. Error message ko'rsatiladi
4. Sahifa ishlaydi - boshqa tugmalarni bosib ko'ring
5. "Success" bosing → Works fine

✅ Throw Method
1. "500 - Throw" tugmasini bosing (Throw section)
2. ErrorBoundary ishga tushadi
3. Fallback UI ko'rsatiladi
4. "Retry" bosing → Normal page qaytadi
```

### Test 3: Server Error Handling

```bash
✅ Server Component Errors
1. /server-error-test ga o'ting
2. "500 - Server Error" kartasini bosing
3. URL o'zgaradi: ?error=500
4. error.tsx ko'rsatiladi
5. "Qayta urinish" tugmasini bosing
6. URL tozalanadi: /server-error-test
7. Normal page ko'rsatiladi

✅ Different error types
1. "404 - Not Found" bosing → error.tsx
2. "401 - Unauthorized" bosing → error.tsx
3. Har birida "Qayta urinish" ishlashini tekshiring
```

### Test 4: Global Error

```bash
✅ Root Layout Error
1. /global-error-test ga o'ting
2. Layout error throw qiladi
3. global-error.tsx ko'rsatiladi (Critical UI)
4. "Qayta urinish" yoki "Bosh sahifa" bosing
5. Normal page'ga qaytadi
```

---

## 🏗️ Architecture

### Error Handling Hierarchy

```
┌─────────────────────────────────────┐
│     🔴 global-error.tsx             │
│     (Root layout errors)            │
│     Scope: Entire app               │
└──────────────┬──────────────────────┘
               │
      ┌────────▼────────┐
      │  🔵 error.tsx   │
      │  (Page errors)  │
      │  Scope: Page    │
      └────────┬────────┘
               │
        ┌──────▼──────┐
        │ 🟢 try-catch│
        │ (Component) │
        │ Graceful    │
        └─────────────┘
```

### Middleware Flow

```
User Request
     ↓
Middleware
     ↓
Check Cookie (auth-token)
     ↓
┌────┴─────┐
│ Private? │
└────┬─────┘
     │
  ┌──┴───┐
  │ Yes  │ No auth → Redirect /login?redirect=...
  └──┬───┘
     │
  ┌──┴───┐
  │ Auth?│
  └──┬───┘
     │
  ┌──┴───┐
  │ Yes  │ At /login → Redirect /dashboard
  └──┬───┘
     │
   Allow
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Edge (Middleware) + Node.js (API)
- **Auth**: Cookie-based (demo)
- **State**: React Context API

---

## 📝 Production Notes

### ⚠️ Bu demo loyiha - production uchun qo'shish kerak:

#### 1. Authentication
```typescript
❌ Demo: Cookie'da oddiy token
✅ Production:
   - JWT tokens
   - Refresh tokens
   - HttpOnly + Secure cookies
   - Database session management
   - Password hashing (bcrypt)
   - CSRF protection
```

#### 2. Error Logging
```typescript
❌ Demo: console.error()
✅ Production:
   - Sentry / LogRocket
   - Error tracking service
   - User context logging
   - Source maps
```

#### 3. Security
```typescript
✅ Add:
   - Rate limiting
   - Input validation
   - SQL injection protection
   - XSS prevention
   - CORS configuration
```

### Next.js Specific Notes

1. **global-error.tsx**:
   - Production'da to'liq ishlaydi
   - Development'da Next.js overlay ham ko'rsatiladi
   - Must include `<html>` and `<body>` tags
   - Cannot catch errors in root layout

2. **error.tsx**:
   - Must be Client Component (`'use client'`)
   - Cannot catch layout errors (use global-error.tsx)
   - Automatic error boundary

3. **Middleware**:
   - Edge Runtime (limited Node.js APIs)
   - Fast redirects only
   - No heavy computations
   - Cookie operations allowed

---

## 🎓 Nima O'rganasiz

### 1. Middleware
- [x] Route protection implementation
- [x] Cookie handling
- [x] Conditional redirects
- [x] Matcher patterns
- [x] Edge Runtime

### 2. Error Handling
- [x] 3-level error hierarchy
- [x] Client vs Server errors
- [x] Error boundaries
- [x] Graceful degradation
- [x] User-friendly UI

### 3. Next.js App Router
- [x] Route groups `(public)`, `(protected)`
- [x] Server vs Client Components
- [x] Special files (error.tsx, global-error.tsx, not-found.tsx)
- [x] Middleware config
- [x] API routes

### 4. Production Best Practices
- [x] Error messages
- [x] Retry mechanisms
- [x] URL cleanup
- [x] UX optimization
- [x] Performance (matcher)

---

## 📚 Resources

- [Next.js Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Next.js Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [App Router Authentication](https://nextjs.org/docs/app/building-your-application/authentication)
- [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge)

---

## 👨‍💻 Author

**Fayzullo**
GitHub: [@Fayzullo07](https://github.com/Fayzullo07)

---

## 📄 License

MIT - Educational purposes

---

## 🎯 Xulosa

Bu loyiha Next.js'da professional-level middleware va error handling qanday qilinishini to'liq ko'rsatadi. Har bir feature interactive test sahifasi bilan keladi - code'ni o'qimasdan ham ishlashini ko'rishingiz mumkin!

**Key Takeaways:**
1. ✅ Middleware = Route protection + Authentication
2. ✅ 3-level errors = Global → Page → Client
3. ✅ Production-ready UI/UX
4. ✅ Best practices + Clean code

**Test qilishni boshlang:** `npm run dev` → `http://localhost:3000`
