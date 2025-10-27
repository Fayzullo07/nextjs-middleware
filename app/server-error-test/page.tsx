/**
 * Server Error Test - Server Component data fetching errors
 * Bu page Server Component bo'lib, server-side'da error throw qiladi
 * error.tsx avtomatik ishga tushadi
 */

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function ServerErrorTest({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const errorType = params.error as string;

  // Server-side'da turli xil error'larni simulate qilish
  if (errorType === '500') {
    throw new Error('Server xatoligi: Internal Server Error (500)');
  }

  if (errorType === '404') {
    throw new Error('Ma\'lumot topilmadi: Not Found (404)');
  }

  if (errorType === '401') {
    throw new Error('Ruxsat yo\'q: Unauthorized (401)');
  }

  if (errorType === 'network') {
    throw new Error('Tarmoq xatoligi: Network Error');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="text-6xl">🖥️</div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Server Error Test
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Server Component data fetching xatoliklarini sinab ko'ring
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-green-100 border-2 border-green-300 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="font-semibold text-green-900">
                ✅ Sahifa muvaffaqiyatli yuklandi - Xatolik yo'q
              </span>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <div className="flex items-start">
              <div className="text-4xl mr-4">💡</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Server Component Errors
                </h3>
                <p className="text-blue-100 mb-2 leading-relaxed">
                  Bu sahifa <strong className="text-white">Server Component</strong> - server-side'da render bo'ladi.
                  Data fetching paytida error yuz berganda, Next.js avtomatik ravishda
                  <code className="bg-blue-700 px-2 py-1 rounded mx-1 text-white">error.tsx</code>
                  faylini ko'rsatadi.
                </p>
                <div className="flex items-center mt-4 bg-blue-600 bg-opacity-50 rounded-lg px-4 py-2 w-fit">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Quyidagi tugmalarni bosib turli xatoliklarni sinab ko'ring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Test Cards */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                🎯 Test Scenariylari
              </h2>
              <p className="text-gray-600">
                Quyidagi kartalardan birini tanlang va error.tsx'ni ko'ring
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Success */}
              <a
                href="/server-error-test"
                className="group relative block p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SUCCESS
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-xl p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 mb-2">
                      ✅ Muvaffaqiyatli so'rov
                    </h3>
                    <p className="text-sm text-green-700 mb-3">
                      Server xatoliksiz ishlaydi - normal sahifa ko'rsatiladi
                    </p>
                    <div className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block">
                      Status: 200 OK
                    </div>
                  </div>
                </div>
              </a>

              {/* 500 Error */}
              <a
                href="/server-error-test?error=500"
                className="group relative block p-8 bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl hover:border-red-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  ERROR
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 rounded-xl p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      🔥 500 - Server Error
                    </h3>
                    <p className="text-sm text-red-700 mb-3">
                      Server ichki xatoligi - error.tsx ishga tushadi
                    </p>
                    <div className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full inline-block">
                      Internal Server Error
                    </div>
                  </div>
                </div>
              </a>

              {/* 404 Error */}
              <a
                href="/server-error-test?error=404"
                className="group relative block p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl hover:border-orange-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NOT FOUND
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-xl p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">
                      🔍 404 - Not Found
                    </h3>
                    <p className="text-sm text-orange-700 mb-3">
                      Ma'lumot topilmadi - error.tsx xatolikni ko'rsatadi
                    </p>
                    <div className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block">
                      Resource Not Found
                    </div>
                  </div>
                </div>
              </a>

              {/* 401 Error */}
              <a
                href="/server-error-test?error=401"
                className="group relative block p-8 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  UNAUTHORIZED
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500 rounded-xl p-3 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-yellow-900 mb-2">
                      🔒 401 - Unauthorized
                    </h3>
                    <p className="text-sm text-yellow-700 mb-3">
                      Ruxsat berilmagan - error.tsx ishga tushadi
                    </p>
                    <div className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block">
                      Authentication Required
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Visual Flow Diagram */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-purple-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                ⚡ Qanday ishlaydi?
              </h2>
              <p className="text-gray-600">Step-by-step jarayon</p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-blue-500 transform transition-all hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">🖥️</span>
                      Server Component Render
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Bu page <strong>Server Component</strong> - server-side'da render bo'ladi.
                      Query parametrlar tekshiriladi: <code className="bg-blue-100 px-2 py-1 rounded text-sm">?error=500</code>
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <code className="text-sm text-blue-900 block">
                        <span className="text-blue-600">const</span> errorType = <span className="text-green-600">params</span>.error;<br/>
                        <span className="text-purple-600">// errorType = "500"</span>
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-red-500 transform transition-all hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">💥</span>
                      Error Throw Qilinadi
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Server-side'da error throw qilinadi. Next.js buni avtomatik ushlaydi.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <code className="text-sm text-red-900 block">
                        <span className="text-purple-600">if</span> (errorType === <span className="text-green-600">'500'</span>) {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-red-600">throw new Error</span>(<span className="text-green-600">'Server xatoligi'</span>);<br/>
                        {'}'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-green-500 transform transition-all hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">🎯</span>
                      error.tsx Ishga Tushadi
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Next.js avtomatik ravishda <code className="bg-green-100 px-2 py-1 rounded">app/error.tsx</code> faylini
                      ko'rsatadi. Bu fallback UI hisoblanadi.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <code className="text-sm text-green-900 block">
                        <span className="text-purple-600">export default function</span> <span className="text-blue-600">Error</span>() {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-purple-600">return</span> {'<'}Fallback UI{'/>'}<br/>
                        {'}'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-2xl font-bold mb-2">Natija</h3>
                <p className="text-purple-100">
                  Foydalanuvchi error.tsx'dagi chiroyli error page'ni ko'radi -
                  "Qayta urinish" va "Bosh sahifa" tugmalari bilan
                </p>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-3">📝</div>
              <h2 className="text-2xl font-bold text-gray-900">
                Kod Namunasi
              </h2>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <div className="text-xs text-gray-400 mb-4">server-error-test/page.tsx</div>
              <code className="text-sm text-green-400 block font-mono">
                <span className="text-blue-400">async function</span> <span className="text-yellow-300">ServerErrorTest</span>({'{'} searchParams {'}'}) {'{'}<br/>
                &nbsp;&nbsp;<span className="text-blue-400">const</span> params = <span className="text-blue-400">await</span> searchParams;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">const</span> errorType = params.error;<br/>
                <br/>
                &nbsp;&nbsp;<span className="text-gray-500">// Server-side error throw qilish</span><br/>
                &nbsp;&nbsp;<span className="text-purple-400">if</span> (errorType === <span className="text-green-300">'500'</span>) {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">throw new Error</span>(<span className="text-green-300">'Server xatoligi'</span>);<br/>
                &nbsp;&nbsp;{'}'}<br/>
                <br/>
                &nbsp;&nbsp;<span className="text-gray-500">// Next.js avtomatik error.tsx'ni ko'rsatadi!</span><br/>
                &nbsp;&nbsp;<span className="text-purple-400">return</span> {'<'}Page {'/>'}<br/>
                {'}'}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerErrorTest;
