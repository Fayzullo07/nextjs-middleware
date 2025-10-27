export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Aloqa
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6 text-lg">
              Bu ham public page. Authentication talab qilinmaydi.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-600">+998 90 123 45 67</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Manzil</h3>
                <p className="text-gray-600">Toshkent, O'zbekiston</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
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
