import Link from 'next/link';

/**
 * not-found.tsx - 404 sahifa
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Sahifa topilmadi
        </h3>
        <p className="text-gray-600 mb-6">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
