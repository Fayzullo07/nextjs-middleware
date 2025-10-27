/**
 * Home Page - Next.js Middleware va Error Handling Demo
 * Bu sahifada turli xil error handling test sahifalari ro'yxati
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4 md:mb-6">
              <div className="text-5xl md:text-7xl">⚡</div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 md:mb-6 px-2">
              Next.js Middleware & Error Handling
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 px-4">
              Professional-level middleware, authentication va error handling demo
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 px-4">
              <span className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Next.js 14+
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                TypeScript
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                App Router
              </span>
            </div>
          </div>

          {/* Quick Start Banner */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl md:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12 text-white">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-0 sm:mr-6">🚀</div>
              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quick Start Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-3 flex items-center">
                      <span className="bg-white bg-opacity-30 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 text-sm text-indigo-900">1</span>
                      Test Features
                    </h3>
                    <ul className="space-y-2 text-indigo-100 text-sm sm:text-base">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Quyidagi kartalardan birini tanlang
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Interactive tugmalarni bosib test qiling
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Har bir feature'ning ishlashini kuzating
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-3 flex items-center">
                      <span className="bg-white bg-opacity-30 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 text-sm text-indigo-900">2</span>
                      Explore Code
                    </h3>
                    <ul className="space-y-2 text-indigo-100 text-sm sm:text-base">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <code className="bg-white bg-opacity-20 px-1.5 sm:px-2 py-0.5 rounded text-indigo-900 text-xs sm:text-sm">README.md</code> - To'liq documentation
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <code className="bg-white bg-opacity-20 px-1.5 sm:px-2 py-0.5 rounded text-indigo-900 text-xs sm:text-sm">ARCHITECTURE.md</code> - Technical details
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Source code - Har bir fayl izohlar bilan
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 bg-white bg-opacity-20 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-indigo-900">
                    💡 <strong className="text-black">Tavsiya:</strong> Client Error Test'dan boshlang - eng oddiysi.
                    Keyin Server Error → Global Error → Middleware Auth tartibida o'ting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Test Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Client Error Test */}
            <a
              href="/client-error-test"
              className="group relative block bg-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-green-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl p-3 sm:p-4 mr-3 sm:mr-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Client Error Test</h2>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                        CLIENT
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      Client Component'da API fetch paytida xatoliklarni sinab ko'ring
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Try-Catch yondashuvi
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        ErrorBoundary yondashuvi
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Taqqoslash jadvali
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end text-green-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  Test qilish
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Server Error Test */}
            <a
              href="/server-error-test"
              className="group relative block bg-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-blue-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl p-3 sm:p-4 mr-3 sm:mr-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Server Error Test</h2>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                        SERVER
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      Server Component'da render paytida xatoliklarni sinab ko'ring
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        error.tsx avtomatik ishga tushadi
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Turli error turlari (500, 404, 401)
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Step-by-step flow diagram
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end text-blue-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  Test qilish
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Global Error Test */}
            <a
              href="/global-error-test"
              className="group relative block bg-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-red-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-400 to-red-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl p-3 sm:p-4 mr-3 sm:mr-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Global Error Test</h2>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full animate-pulse">
                        CRITICAL
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      Root layout darajasidagi global xatoliklarni sinab ko'ring
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        global-error.tsx avtomatik ishga tushadi
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Application-level error handling
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Root layout error fallback
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end text-red-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  Test qilish
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Middleware Test */}
            <a
              href="/login"
              className="group relative block bg-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-purple-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl p-3 sm:p-4 mr-3 sm:mr-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Middleware Auth</h2>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                        SECURITY
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      Next.js Middleware bilan authentication va route protection
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Login/Logout funksiyasi
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Private route protection (/profile)
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Auth redirect (redirect=... parameter)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end text-purple-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  Test qilish
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Error Handling */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
              <div className="flex items-start">
                <div className="text-3xl sm:text-4xl mr-3 sm:mr-4">📚</div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Error Handling Darajasi
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <div className="bg-red-100 text-red-700 rounded-lg px-2.5 sm:px-3 py-1 font-semibold text-xs sm:text-sm mr-2 sm:mr-3 mt-1">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Global Error</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Root layout xatoliklari - eng yuqori daraja
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 rounded-lg px-2.5 sm:px-3 py-1 font-semibold text-xs sm:text-sm mr-2 sm:mr-3 mt-1">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Page Error</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Server Component xatoliklar - sahifa darajasida
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 text-green-700 rounded-lg px-2.5 sm:px-3 py-1 font-semibold text-xs sm:text-sm mr-2 sm:mr-3 mt-1">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Client Error</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          try-catch/ErrorBoundary - komponent darajasida
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middleware Info */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-purple-200">
              <div className="flex items-start">
                <div className="text-3xl sm:text-4xl mr-3 sm:mr-4">🔐</div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Middleware Protection
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-white bg-opacity-60 rounded-lg p-2.5 sm:p-3">
                      <h3 className="font-bold text-purple-900 mb-1 flex items-center text-xs sm:text-sm">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Private Routes
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-800">
                        <code className="bg-purple-100 px-1 rounded text-xs">/profile</code> - faqat authenticated userlar uchun
                      </p>
                    </div>
                    <div className="bg-white bg-opacity-60 rounded-lg p-2.5 sm:p-3">
                      <h3 className="font-bold text-purple-900 mb-1 flex items-center text-xs sm:text-sm">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Auth Redirect
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-800">
                        Login'dan keyin automatik redirect
                      </p>
                    </div>
                    <div className="bg-white bg-opacity-60 rounded-lg p-2.5 sm:p-3">
                      <h3 className="font-bold text-purple-900 mb-1 flex items-center text-xs sm:text-sm">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Cookie-based Auth
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-800">
                        Token cookie orqali authentication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-600 px-4">
            <p className="text-xs sm:text-sm">
              Next.js Error Handling Demo - O'rganish va sinov uchun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
