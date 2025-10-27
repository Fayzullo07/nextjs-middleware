export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Aloqa
          </h1>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
              Bu ham public page. Authentication talab qilinmaydi.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base break-all">info@example.com</p>
              </div>

              <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Telefon</h3>
                <p className="text-gray-600 text-sm sm:text-base">+998 90 123 45 67</p>
              </div>

              <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Manzil</h3>
                <p className="text-gray-600 text-sm sm:text-base">Toshkent, O'zbekiston</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-gray-50 p-3 sm:p-4 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600">
                <strong>Eslatma:</strong> Bu sahifa middleware.ts faylida private route'lar
                ro'yxatiga kiritilmagan, shuning uchun barcha foydalanuvchilar ko'rishi mumkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
