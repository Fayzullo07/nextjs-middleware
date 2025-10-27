# Next.js Middleware Demo

Bu loyihada Next.js middleware yordamida private/public page'larni boshqarish, authentication va error handling asoslari ko'rsatilgan.

## Asosiy xususiyatlar

- **Middleware Route Protection** - Private va public route'larni ajratish
- **Cookie-based Authentication** - HttpOnly cookie bilan xavfsiz autentifikatsiya
- **Error Handling** - ErrorBoundary va error.tsx bilan xatoliklarni boshqarish
- **Route Groups** - (public) va (protected) papkalar bilan tashkillashtirish
- **TypeScript** - Type safety uchun

## Loyiha strukturasi

```
nextjs-middleware/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/route.ts   # Login API endpoint
│   │       └── logout/route.ts  # Logout API endpoint
│   ├── (public)/                # Public sahifalar (route group)
│   │   ├── page.tsx             # Bosh sahifa (/)
│   │   ├── about/page.tsx       # Biz haqimizda
│   │   ├── contact/page.tsx     # Aloqa
│   │   └── login/page.tsx       # Login
│   ├── (protected)/             # Protected sahifalar (route group)
│   │   ├── dashboard/page.tsx   # Dashboard
│   │   └── profile/page.tsx     # Profil
│   ├── layout.tsx               # Root layout
│   └── error.tsx                # Page-level error handler
├── components/
│   ├── Navigation.tsx           # Navigation bar
│   └── ErrorBoundary.tsx        # React Error Boundary
├── contexts/
│   └── AuthContext.tsx          # Authentication context
├── types/
│   └── auth.ts                  # TypeScript type definitions
└── middleware.ts                # Route protection middleware
```

## Sahifalar

### Public Page'lar (Authentication talab qilinmaydi)

- **Bosh sahifa** (`/`) - Loyiha haqida umumiy ma'lumot
- **Biz haqimizda** (`/about`) - Public page namunasi
- **Aloqa** (`/contact`) - Aloqa sahifasi
- **Login** (`/login`) - Tizimga kirish sahifasi

### Private Page'lar (Faqat authenticated userlar uchun)

- **Dashboard** (`/dashboard`) - Asosiy dashboard
- **Profil** (`/profile`) - Foydalanuvchi profili

## Middleware qanday ishlaydi?

`middleware.ts` fayli har bir request uchun ishlaydi va quyidagilarni bajaradi:

1. **Cookie tekshiruvi** - `auth-token` cookie'si mavjudligini tekshiradi
2. **Route tahlili** - Qaysi route'ga murojaat qilinayotganini aniqlaydi
3. **Himoya** - Private route'larga faqat authenticated userlar kirishiga ruxsat beradi
4. **Redirect** - Zarur bo'lsa, foydalanuvchini login yoki dashboard'ga yo'naltiradi

### Middleware logikasi

```typescript
// Private route'lar ro'yxati
const privateRoutes = ['/dashboard', '/profile', '/settings'];

// Agar authenticated bo'lmagan user private route'ga kirmoqchi bo'lsa
// -> Login sahifasiga redirect
if (isPrivateRoute && !isAuthenticated) {
  return NextResponse.redirect(loginUrl);
}

// Agar authenticated user login sahifasiga kirmoqchi bo'lsa
// -> Dashboard'ga redirect
if (isAuthRoute && isAuthenticated) {
  return NextResponse.redirect(dashboardUrl);
}
```

## Authentication

Loyihada cookie-based authentication tizimi ishlatilgan:

### Authentication oqimi:

1. **Login** - Foydalanuvchi login sahifasida email va parol kiritadi
2. **API Request** - `/api/auth/login` endpoint'ga POST request yuboriladi
3. **Cookie Set** - Server HttpOnly cookie o'rnatadi
4. **Middleware Check** - Har bir request uchun cookie tekshiriladi
5. **Logout** - `/api/auth/logout` endpoint cookie'ni o'chiradi

### Cookie xavfsizligi:

- **HttpOnly** - JavaScript orqali o'qib bo'lmaydi (XSS dan himoya)
- **Secure** - Production'da faqat HTTPS orqali
- **SameSite** - CSRF hujumlaridan himoya

### Test qilish:

Login sahifasida istalgan email va 6+ belgili parol kiriting:
```
Email: test@example.com
Parol: 123456
```

## Error Handling

Loyihada ikki xil error handling mexanizmi mavjud:

### 1. ErrorBoundary (Client-side)

`components/ErrorBoundary.tsx` - React class component bo'lib, **client-side** xatoliklarni ushlaydi.

**Nima ushlaydi:**
- ✅ Client Component render xatoliklari
- ✅ React lifecycle xatoliklari
- ❌ Event handler xatoliklari (try-catch kerak)
- ❌ Server Component xatoliklari

**Layout'da ishlatilishi:**
```typescript
<ErrorBoundary>
  <AuthProvider>
    {children}
  </AuthProvider>
</ErrorBoundary>
```

### 2. error.tsx (Server-side)

`app/error.tsx` - Next.js'ning maxsus fayli, **server-side** xatoliklarni ushlaydi.

**Nima ushlaydi:**
- ✅ Server Component xatoliklari
- ✅ Data fetching xatoliklari (Server Component'da)
- ✅ Page-level runtime xatoliklari
- ❌ Layout xatoliklari

### Nega ikkalasi ham kerak?

| Xususiyat | ErrorBoundary | error.tsx |
|-----------|---------------|-----------|
| **Turi** | Class Component | Function Component |
| **Joyi** | Layout'da manual | Next.js avtomatik |
| **Nima ushlaydi** | Client xatoliklari | Server xatoliklari |
| **Scope** | O'rab olgan children | Page level |

**Xulosa:** Ikkalasi ham kerak - client va server xatoliklarni alohida ushlaydi!

## O'rnatish va ishga tushirish

1. **Dependencies o'rnatish:**

```bash
npm install
```

2. **Development server ishga tushirish:**

```bash
npm run dev
```

3. **Brauzerni ochish:**

```
http://localhost:3000
```

## Foydalanilgan texnologiyalar

- **Next.js 16** - React framework (App Router)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Context API** - Authentication state management
- **Cookies** - Session management

## Asosiy tushunchalar

### Middleware Config

Middleware faqat kerakli route'larda ishlaydi:

```typescript
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/login',
    '/register',
  ],
};
```

Bu yondashuv performance uchun yaxshi - barcha request'larda emas, faqat zarur bo'lganda ishga tushadi.

### Route Groups

Next.js'da `(folder)` sintaksisi bilan route'larni guruhlaymiz:
- `(public)` - URL'ga ta'sir qilmaydi, faqat tashkillashtirish uchun
- `(protected)` - Middleware orqali himoyalangan route'lar

## Loyihaning maqsadi

Bu demo loyiha Next.js'da quyidagi asosiy tushunchalarni ko'rsatish uchun yaratilgan:

1. **Middleware** - Route protection va authentication check
2. **Cookie-based Auth** - Xavfsiz session management
3. **Error Handling** - ErrorBoundary (client) va error.tsx (server)
4. **Route Groups** - Public/Private sahifalarni tashkillashtirish
5. **TypeScript** - Type safety

## Muhim eslatmalar

- Bu demo loyiha - production uchun qo'shimcha xavfsizlik kerak
- Cookie'lar browser'da saqlanadi, real loyihada database kerak
- Parol validation minimal - real loyihada kuchliroq validation kerak
