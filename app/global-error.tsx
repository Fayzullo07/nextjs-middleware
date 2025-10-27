'use client';

import { useEffect } from 'react';

/**
 * Next.js global-error.tsx - Root layout error handler
 * Root layout va global xatoliklarni ushlaydi
 *
 * error.tsx'dan farqi:
 * - global-error.tsx: Root layout xatoliklari, app-level errors
 * - error.tsx: Page-level xatoliklar
 *
 * IMPORTANT: global-error.tsx must include <html> and <body> tags
 * because it replaces the root layout when active
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Xatolikni console'ga chiqarish (production'da logging service'ga yuborish mumkin)
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-red-600 to-red-700">
          <div className="max-w-2xl w-full mx-4">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            {/* Error Card */}
            <div className="relative bg-white shadow-2xl rounded-2xl p-8 md:p-12">
              {/* Critical Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center space-x-2 animate-pulse">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>CRITICAL ERROR</span>
                </div>
              </div>

              {/* Error Icon */}
              <div className="flex items-center justify-center w-24 h-24 mx-auto mt-4 mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full">
                <svg
                  className="w-12 h-12 text-red-600"
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

              {/* Error Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
                Global Xatolik Yuz Berdi
              </h1>

              {/* Error Type Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold text-sm">
                  🌐 Application-Level Error
                </span>
              </div>

              {/* Error Message */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
                <p className="text-red-900 font-medium mb-2">
                  Xatolik xabari:
                </p>
                <p className="text-red-800 font-mono text-sm">
                  {error.message || 'Kutilmagan global xatolik yuz berdi'}
                </p>
              </div>

              {/* Error Details */}
              {error.digest && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium mr-2">Error ID:</span>
                    <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                      {error.digest}
                    </code>
                  </div>
                </div>
              )}

              {/* Info Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border border-blue-200">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">💡</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-900 mb-2">
                      Global Error nima?
                    </h3>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      Bu <strong>root layout</strong> darajasidagi xatolik. Odatda bu juda kamdan-kam uchraydi.
                      Agar bu xatolikni ko'rsangiz, iltimos dasturchi bilan bog'laning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    // URL'dagi error query parametrini tozalab, sahifani reload qilish
                    const url = new URL(window.location.href);
                    if (url.searchParams.has('error')) {
                      // Agar error parametr bo'lsa, uni o'chirib sahifaga navigate qilish
                      url.searchParams.delete('error');
                      window.location.href = url.toString();
                    } else {
                      // Aks holda oddiy reset
                      reset();
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Qayta urinish</span>
                </button>

                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-gray-100 text-gray-700 py-4 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Bosh sahifaga qaytish</span>
                </button>
              </div>

              {/* Support Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  Agar muammo davom etsa, iltimos yordam oling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </body>
    </html>
  );
}
