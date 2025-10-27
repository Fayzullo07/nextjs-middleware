'use client';

import { useState } from 'react';

/**
 * Client Error Test - Client Component data fetching errors
 *
 * 2 xil yondashuv:
 * 1. try-catch bilan handle qilish (graceful error handling)
 * 2. throw qilish - ErrorBoundary ushlaydi
 */

export default function ClientErrorTest() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState<'idle' | 'handled' | 'thrown'>('idle');
  const [shouldThrow, setShouldThrow] = useState(false);
  const [errorToThrow, setErrorToThrow] = useState<Error | null>(null);

  // Try-catch bilan handle qilish
  const handleWithTryCatch = async (type: string) => {
    setLoading(true);
    setResult('');
    setErrorState('idle');

    try {
      const response = await fetch(`/api/test-error?type=${type}`);

      if (!response.ok) {
        setErrorState('handled');
        setResult(`❌ Error handled: ${response.status} ${response.statusText}`);
        return;
      }

      const data = await response.json();
      setErrorState('idle');
      setResult(`✅ Success: ${data.message}`);
    } catch (error) {
      setErrorState('handled');
      setResult(`❌ Error caught: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  // Error'ni throw qilish - ErrorBoundary ushlaydi
  const handleWithThrow = async (type: string) => {
    setLoading(true);
    setResult('');
    setShouldThrow(false); // Reset
    setErrorToThrow(null);  // Reset

    try {
      const response = await fetch(`/api/test-error?type=${type}`);

      if (!response.ok) {
        // Error'ni state'ga saqlash va render paytida throw qilish
        setErrorToThrow(new Error(`API Error: ${response.status} ${response.statusText}`));
        setShouldThrow(true);
        return;
      }

      const data = await response.json();
      setResult(`✅ Success: ${data.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Render paytida error throw qilish - ErrorBoundary ushlaydi
  if (shouldThrow && errorToThrow) {
    throw errorToThrow;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="text-6xl">📡</div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Client Fetch Test
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Client Component API fetching xatoliklarini sinab ko'ring
            </p>
          </div>

          {/* Status Badge */}
          {loading ? (
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-blue-100 border-2 border-blue-300 rounded-full px-6 py-3">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
                <span className="font-semibold text-blue-900">
                  🔄 Yuklanmoqda...
                </span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-green-100 border-2 border-green-300 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold text-green-900">
                  ✅ Tayyor - Test tugmalarini bosing
                </span>
              </div>
            </div>
          )}

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <div className="flex items-start">
              <div className="text-4xl mr-4">💡</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Client Component API Fetching
                </h3>
                <p className="text-green-100 mb-2 leading-relaxed">
                  Bu sahifa <strong className="text-white">Client Component</strong> - browser'da ishlaydi.
                  API fetch paytida error yuz berganda, <strong className="text-white">2 xil yondashuv</strong> mavjud:
                  <code className="bg-green-700 px-2 py-1 rounded mx-1 text-white">try-catch</code> (graceful) yoki
                  <code className="bg-green-700 px-2 py-1 rounded mx-1 text-white">throw</code> (ErrorBoundary).
                </p>
                <div className="flex items-center mt-4 bg-green-600 bg-opacity-50 rounded-lg px-4 py-2 w-fit">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Quyidagi 2 usulni taqqoslang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time State - Enhanced */}
          {result && (
            <div className={`mb-8 p-8 rounded-2xl border-2 shadow-xl transform transition-all ${errorState === 'handled'
                ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-400'
                : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400'
              }`}>
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${errorState === 'handled' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {errorState === 'handled' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    )}
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${errorState === 'handled' ? 'text-yellow-900' : 'text-green-900'
                    }`}>
                    {errorState === 'handled' ? '⚠️ Error Handled' : '✅ Success'}
                  </h3>
                  <p className="text-lg font-mono bg-white bg-opacity-70 p-4 rounded-lg text-indigo-900">{result}</p>
                  <div className={`mt-3 text-sm px-4 py-2 rounded-full inline-block ${errorState === 'handled'
                      ? 'bg-yellow-200 text-yellow-900'
                      : 'bg-green-200 text-green-900'
                    }`}>
                    {errorState === 'handled' ? 'try-catch bilan ushlandi' : 'Xatolik yo\'q'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Method 1: Try-Catch */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl px-4 py-2 font-bold text-lg mr-3">
                  1️⃣
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Try-Catch Yondashuvi
                </h2>
              </div>
              <p className="text-gray-600 mb-2">
                Error'lar <code className="bg-green-100 px-2 py-1 rounded text-green-800">try-catch</code> bilan ushlanadi.
                ErrorBoundary ishga tushmaydi - error <strong>gracefully handle</strong> qilinadi.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <p className="text-sm text-green-800">
                  ✅ <strong>Yaxshi:</strong> Sahifa ishlaydi, faqat error message ko'rsatiladi
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleWithTryCatch('success')}
                disabled={loading}
                className="group relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:border-green-400 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-green-900 text-lg mb-1">✅ Success</div>
                    <div className="text-sm text-green-700">Muvaffaqiyatli so'rov</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleWithTryCatch('500')}
                disabled={loading}
                className="group relative p-6 bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl hover:border-red-400 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start">
                  <div className="bg-red-500 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-red-900 text-lg mb-1">🔥 500 Error</div>
                    <div className="text-sm text-red-700">try-catch ushlaydi</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleWithTryCatch('404')}
                disabled={loading}
                className="group relative p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl hover:border-orange-400 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-orange-900 text-lg mb-1">🔍 404 Error</div>
                    <div className="text-sm text-orange-700">try-catch ushlaydi</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleWithTryCatch('401')}
                disabled={loading}
                className="group relative p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl hover:border-yellow-400 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start">
                  <div className="bg-yellow-500 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-yellow-900 text-lg mb-1">🔒 401 Error</div>
                    <div className="text-sm text-yellow-700">try-catch ushlaydi</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Method 2: Throw */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl px-4 py-2 font-bold text-lg mr-3">
                  2️⃣
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Throw Yondashuvi (ErrorBoundary)
                </h2>
              </div>
              <p className="text-gray-600 mb-2">
                Error'lar <code className="bg-purple-100 px-2 py-1 rounded text-purple-800">throw</code> qilinadi.
                ErrorBoundary avtomatik ishga tushadi va <strong>fallback UI</strong> ko'rsatadi.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
                <p className="text-sm text-purple-800">
                  ⚠️ <strong>Diqqat:</strong> Butun sahifa ErrorBoundary fallback UI bilan almashadi!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleWithThrow('success')}
                disabled={loading}
                className="group relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:border-green-400 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-green-900 text-lg mb-1">✅ Success</div>
                    <div className="text-sm text-green-700">Xatolik yo'q</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleWithThrow('500')}
                disabled={loading}
                className="group relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  THROW!
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-lg p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-purple-900 text-lg mb-1">💥 500 - Throw</div>
                    <div className="text-sm text-purple-700">ErrorBoundary ushlaydi</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border-2 border-indigo-200">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">⚖️</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Try-Catch vs Throw
              </h2>
              <p className="text-gray-600">Qaysi usulni qachon ishlatish kerak?</p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">Xususiyat</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">
                      <div className="flex items-center">
                        <span className="mr-2">✅</span>
                        Try-Catch
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-lg">
                      <div className="flex items-center">
                        <span className="mr-2">💥</span>
                        Throw
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50">Error handling</td>
                    <td className="px-6 py-4">
                      <span className="text-green-700 font-medium">Graceful - sahifa ishlaydi</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-purple-700 font-medium">Fallback UI ko'rsatiladi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50">User experience</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          ✅ Yaxshi - partial error
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                          ⚠️ Butun sahifa almashadi
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors text-gray-900">
                    <td className="px-6 py-4 font-bold bg-gray-50">Qachon ishlatish</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-sm">• API calls</div>
                        <div className="text-sm">• Form submission</div>
                        <div className="text-sm">• Data fetching</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-sm">• Critical render errors</div>
                        <div className="text-sm">• Component crashes</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50">Kod miqdori</td>
                    <td className="px-6 py-4 text-gray-700">
                      Ko'proq (har bir fetch uchun)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Kamroq (global handler)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50">Tavsiya</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
                          ⭐ Recommended
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600 font-medium">Faqat zarur hollarda</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
              <div className="flex items-start">
                <div className="text-3xl mr-4">💡</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Best Practice</h3>
                  <p className="text-green-100">
                    <strong className="text-white">Data fetching</strong> uchun <code className="bg-green-600 px-2 py-1 rounded">try-catch</code> ishlatish yaxshiroq.
                    ErrorBoundary faqat <strong className="text-white">render paytidagi</strong> xatoliklar uchun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
