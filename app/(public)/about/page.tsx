export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Biz haqimizda
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4 text-lg">
              Bu public page - barcha foydalanuvchilar bu sahifani ko'rishi mumkin.
            </p>
            <p className="text-gray-600 mb-4">
              Next.js middleware orqali biz route'larni himoyalashimiz va authentication
              holatiga qarab foydalanuvchilarni boshqa sahifalarga yo'naltirishimiz mumkin.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <h3 className="font-semibold text-blue-900 mb-2">
                Middleware afzalliklari:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Server-side da ishga tushadi</li>
                <li>Tez va samarali</li>
                <li>Barcha route'lar uchun yagona logic</li>
                <li>Cookie va header'lar bilan ishlash</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
