/**
 * Global Error Test Page
 * Bu sahifa global-error.tsx'ni ko'rsatish uchun
 * Layout'da error throw qilinadi
 */

export default function GlobalErrorTestPage() {
  // Bu sahifa hech qachon ko'rinmaydi, chunki layout'da error bo'ladi
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Global Error Test
          </h1>
          <p className="text-center text-gray-600">
            Agar siz bu sahifani ko'rsangiz, demak global error ishlamayapti.
          </p>
        </div>
      </div>
    </div>
  );
}
