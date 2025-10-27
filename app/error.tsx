'use client';

import { useEffect } from 'react';

/**
 * Next.js error.tsx - Page-level error handler
 * Server Component va page-level xatoliklarni ushlaydi
 *
 * ErrorBoundary'dan farqi:
 * - error.tsx: Server Component xatoliklari, data fetching
 * - ErrorBoundary: Client Component xatoliklari, render errors
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Xatolikni console'ga chiqarish (production'da logging service'ga yuborish mumkin)
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        {/* Error Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Nimadir noto'g'ri ketdi
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {error.message || 'Kutilmagan xatolik yuz berdi'}
        </p>

        {/* Error ID (agar mavjud bo'lsa) */}
        {error.digest && (
          <p className="text-xs text-center text-gray-400 mb-4">
            Error ID: {error.digest}
          </p>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Qayta urinish
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    </div>
  );
}
