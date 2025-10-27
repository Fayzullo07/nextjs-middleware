'use client';
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Profil
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Shaxsiy ma'lumotlar
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">{user?.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              Private page
            </h3>
            <p className="text-blue-800 text-sm">
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
