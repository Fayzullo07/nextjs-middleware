export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Xush kelibsiz!
            </h2>
            <p className="text-gray-600 mb-4">
              Bu Next.js middleware bilan ishlash demo loyihasi. Bu yerda quyidagi funksionalliklar mavjud:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Middleware orqali route protection (himoyalangan marshrutlar)</li>
              <li>Private va public page'lar (maxfiy va ommaviy sahifalar)</li>
              <li>Authentication system (autentifikatsiya tizimi)</li>
              <li>Error boundary components (xatoliklarni boshqarish)</li>
              <li>Cookie-based session management (cookie asosida sessiya boshqaruvi)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Public Page'lar
              </h3>
              <p className="text-blue-700 mb-4">
                Barcha foydalanuvchilar kirishi mumkin:
              </p>
              <ul className="space-y-2 text-blue-600">
                <li>• Bosh sahifa (Siz hozir shu yerdasiz)</li>
                <li>• Biz haqimizda</li>
                <li>• Aloqa</li>
                <li>• Login</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                Private Page'lar
              </h3>
              <p className="text-green-700 mb-4">
                Faqat tizimga kirgan foydalanuvchilar ko'rishi mumkin:
              </p>
              <ul className="space-y-2 text-green-600">
                <li>• Dashboard</li>
                <li>• Profil</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">
              📝 Qanday test qilish mumkin:
            </h3>
            <div className="space-y-2 text-yellow-700">
              <p className="flex items-start gap-2">
                <span className="font-semibold min-w-fit">1.</span>
                <span>Login sahifasiga o'ting va istalgan email va 6+ belgili parol kiriting</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold min-w-fit">2.</span>
                <span>Middleware avtomatik ravishda sizni Dashboard'ga yo'naltiradi</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold min-w-fit">3.</span>
                <span>Private sahifalarga (Dashboard, Profile) erkin kirishingiz mumkin</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold min-w-fit">4.</span>
                <span>Logout qilsangiz, qayta login qilmasdan private sahifalarga kirish imkonsiz bo'ladi</span>
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-8 bg-pink-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Asosiy xususiyatlar
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Middleware Protection</h4>
                <p className="text-sm text-gray-600">
                  Server-side himoya - sahifa yuklanishidan oldin tekshiradi
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔐</div>
                <h4 className="font-semibold text-gray-800 mb-2">Cookie Auth</h4>
                <p className="text-sm text-gray-600">
                  Xavfsiz cookie-based autentifikatsiya tizimi
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-semibold text-gray-800 mb-2">Tez ishlaydi</h4>
                <p className="text-sm text-gray-600">
                  Edge Runtime - juda tez redirect va tekshiruv
                </p>
              </div>
            </div>
          </div>

          {/* Error Handling Test Section */}
          <div className="mt-8 bg-purple-50 rounded-lg p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              🔧 Error Handling Test
            </h3>
            <p className="text-center text-gray-600 mb-6">
              3 xil error handling yondashuvini sinab ko'ring:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* ErrorBoundary Test */}
              <a
                href="/error-test"
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-400"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">🚨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ErrorBoundary Test
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Client-side render xatoliklari
                  </p>
                  <div className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full inline-block">
                    React Error Boundary
                  </div>
                </div>
              </a>

              {/* Server Error Test */}
              <a
                href="/server-error-test"
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-400"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">🖥️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Server Error Test
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Server Component xatoliklari
                  </p>
                  <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block">
                    Next.js error.tsx
                  </div>
                </div>
              </a>

              {/* Client Fetch Test */}
              <a
                href="/client-error-test"
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-400"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">📡</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Client Fetch Test
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    API data fetching xatoliklari
                  </p>
                  <div className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block">
                    try-catch vs throw
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-6 bg-purple-100 rounded-lg p-4">
              <p className="text-sm text-purple-900 text-center">
                💡 Har bir test sahifasi turli xil error handling mexanizmlarini ko'rsatadi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
