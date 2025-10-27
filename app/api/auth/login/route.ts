import { NextResponse } from 'next/server';
import type { LoginCredentials, AuthResponse } from '@/types/auth';

const ONE_DAY_IN_SECONDS = 86400;

export async function POST(request: Request) {
  try {
    const body: LoginCredentials = await request.json();
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parol talab qilinadi' } as AuthResponse,
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Parol kamida 6 belgidan iborat bo\'lishi kerak' } as AuthResponse,
        { status: 400 }
      );
    }

    // Demo authentication - real loyihada database query bo'lishi kerak
    // Bu yerda har qanday email va 6+ belgili parolni qabul qilamiz
    const user = {
      id: 'user-' + Date.now(),
      name: email.split('@')[0],
      email: email,
      role: 'user' as const
    };

    // JWT token yaratish kerak edi, lekin demo uchun oddiy token
    const token = `token-${user.id}-${Date.now()}`;

    const response = NextResponse.json({
      success: true,
      user: user,
      message: 'Login muvaffaqiyatli'
    } as AuthResponse);

    // HttpOnly cookie o'rnatish - XSS'dan himoya
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: ONE_DAY_IN_SECONDS,
      path: '/'
    });

    // User ma'lumotlarini alohida cookie'da (client tomondan o'qish uchun)
    response.cookies.set('user-data', JSON.stringify(user), {
      httpOnly: false, // Client o'qishi kerak
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: ONE_DAY_IN_SECONDS,
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi' } as AuthResponse,
      { status: 500 }
    );
  }
}
