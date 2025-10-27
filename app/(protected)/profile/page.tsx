'use client';
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Profil
          </h1>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shrink-0">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-sm sm:text-base text-gray-600">{user?.email}</p>
              </div>
            </div>

            <div className="border-t pt-4 sm:pt-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Shaxsiy ma'lumotlar
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 py-2 sm:py-3">
                  <span className="text-sm sm:text-base text-gray-600">Email:</span>
                  <span className="font-medium text-sm sm:text-base text-gray-900 break-all">{user?.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
              Private page
            </h3>
            <p className="text-blue-800 text-xs sm:text-sm">
              Bu sahifa middleware.ts faylida privateRoutes ro'yxatiga kiritilgan.
              Middleware authentication holatini tekshiradi va faqat tizimga kirgan
              foydalanuvchilarga ruxsat beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
