'use client';
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Dashboard
          </h1>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 text-white mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Xush kelibsiz, {user?.name}!
            </h2>
            <p className="text-sm sm:text-base text-blue-100">
              Bu private page - faqat tizimga kirgan foydalanuvchilar ko'rishi mumkin
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Umumiy sahifalar</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">6</p>
                </div>
                <div className="bg-blue-100 rounded-full p-2 sm:p-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Public sahifalar</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">3</p>
                </div>
                <div className="bg-green-100 rounded-full p-2 sm:p-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Private sahifalar</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">3</p>
                </div>
                <div className="bg-purple-100 rounded-full p-2 sm:p-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Middleware himoyasi
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Bu sahifaga faqat authentication token'i bor foydalanuvchilar kirishlari mumkin.
              Agar siz tizimga kirmasdan bu sahifaga kirishga harakat qilsangiz, middleware
              sizni avtomatik ravishda login sahifasiga yo'naltiradi.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4">
              <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">
                Middleware qanday ishlaydi?
              </h4>
              <ul className="list-disc list-inside space-y-1 text-green-800 text-xs sm:text-sm">
                <li>middleware.ts fayli har bir request uchun ishlaydi</li>
                <li>Cookie'dan auth-token mavjudligini tekshiradi</li>
                <li>Private route'larga kirishni nazorat qiladi</li>
                <li>Zarur bo'lsa, foydalanuvchini redirect qiladi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
