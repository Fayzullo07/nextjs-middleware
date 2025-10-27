'use client';

import { useState, ReactElement } from 'react';

/**
 * Error Component - xatolik throw qiladi
 */
function ErrorThrower(): ReactElement {
  throw new Error('Bu client-side render xatoligi! ErrorBoundary buni ushlaydi.');
}

/**
 * ErrorBoundary Test Page
 * Client-side render paytida error throw qilish va ErrorBoundary'ni test qilish
 */
export default function ErrorTestPage() {
  const [showError, setShowError] = useState(false);

  if (showError) {
    return <ErrorThrower />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ErrorBoundary Test
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-2">
              Client-Side Render Errors
            </h3>
            <p className="text-blue-800 text-sm mb-2">
              Bu sahifada <strong>Client Component</strong>'ning render paytida
              yuzaga keladigan xatoliklar test qilinadi.
            </p>
            <p className="text-blue-800 text-sm">
              Xatolik yuz berganda, <code className="bg-blue-100 px-1">ErrorBoundary</code> component
              uni ushlaydi va fallback UI ko'rsatadi.
            </p>
          </div>

          {/* Test Card */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              ErrorBoundary'ni sinab ko'rish
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-yellow-800 text-sm">
                ⚠️ <strong>Ogohlantirish:</strong> Quyidagi tugmani bosganingizda,
                component render paytida xatolik yuz beradi va butun sahifa
                ErrorBoundary fallback UI bilan almashadi.
              </p>
            </div>

            <button
              onClick={() => setShowError(true)}
              className="w-full md:w-auto px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              🚨 Xatolikni ishga tushirish
            </button>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Qanday ishlaydi?
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. Normal holat</h3>
                <p className="text-gray-600 text-sm">
                  Sahifa oddiy render bo'ladi, tugma bosilguncha xatolik yo'q.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded">
                  <code className="text-xs text-gray-800">
                    {`const [showError, setShowError] = useState(false);
// showError = false - xatolik yo'q`}
                  </code>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. Tugma bosilganda</h3>
                <p className="text-gray-600 text-sm">
                  <code className="bg-gray-100 px-1">setShowError(true)</code> - ErrorThrower component render bo'ladi va xatolik throw qiladi.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded">
                  <code className="text-xs text-gray-800">
                    {`if (showError) {
  return <ErrorThrower />; // Throw qiladi!
}`}
                  </code>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. ErrorBoundary ushlaydi</h3>
                <p className="text-gray-600 text-sm">
                  Layout'dagi <code className="bg-gray-100 px-1">ErrorBoundary</code> component
                  xatolikni ushlaydi va fallback UI ko'rsatadi.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded">
                  <code className="text-xs text-gray-800">
                    {`// app/layout.tsx
<ErrorBoundary>
  <AuthProvider>
    {children}
  </AuthProvider>
</ErrorBoundary>`}
                  </code>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. Fallback UI</h3>
                <p className="text-gray-600 text-sm">
                  ErrorBoundary'ning fallback UI'si ko'rsatiladi - xatolik xabari va
                  "Qayta urinish" tugmasi.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">ErrorBoundary nima ushlaydi?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-600 font-semibold mb-2">✅ Ushlaydi:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Render paytidagi xatoliklar</li>
                    <li>• Lifecycle method'lardagi xatoliklar</li>
                    <li>• Constructor'dagi xatoliklar</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-600 font-semibold mb-2">❌ Ushlamaydi:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Event handler'lardagi xatoliklar</li>
                    <li>• Async kod xatoliklari (setTimeout)</li>
                    <li>• Server Component xatoliklari</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
