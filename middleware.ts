import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const privateRoutes: string[] = ['/dashboard', '/profile'];

const authRoutes: string[] = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Cookie'dan auth token olish
  const token = request.cookies.get('auth-token')?.value;
  const isAuthenticated: boolean = !!token;

  // 2. Route type'ini aniqlash
  const isPrivateRoute: boolean = privateRoutes.some(route =>
    pathname.startsWith(route)
  );
  const isAuthRoute: boolean = authRoutes.some(route =>
    pathname.startsWith(route)
  );

  // 3. Private route protection
  // Agar authenticated bo'lmagan user private route'ga kirishga harakat qilsa
  if (isPrivateRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    // Redirect URL'ni saqlab qo'yamiz - login'dan keyin qaytishi uchun
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Auth route redirect
  // Agar authenticated user login sahifasiga kirishga harakat qilsa
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 5. Request'ga ruxsat berish
  const response = NextResponse.next();

  // Debug headers (development uchun foydali)
  response.headers.set('x-authenticated', String(isAuthenticated));
  response.headers.set('x-pathname', pathname);

  return response;
}

/**
 * Middleware config - qaysi route'larda ishlashini belgilaymiz
 * Matcher pattern'lari Next.js'da route'larni filter qilish uchun ishlatiladi
 */
export const config = {
  matcher: [
    // Private routes - himoyalangan sahifalar
    '/dashboard/:path*',
    '/profile/:path*',
    // Auth routes - login/register
    '/login',
    '/register',
  ],
};
