'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export function Navigation() {
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold">
              Next.js Middleware
            </Link>

            {/* Public links */}
            <div className="hidden md:flex space-x-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/')}`}
              >
                Bosh sahifa
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/about')}`}
              >
                Biz haqimizda
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/contact')}`}
              >
                Aloqa
              </Link>
            </div>

            {/* Private links (faqat authenticated userlar ko'radi) */}
            {isAuthenticated && (
              <div className="hidden md:flex space-x-2 ml-4 border-l border-blue-500 pl-4">
                <Link
                  href="/dashboard"
                  className={`px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/dashboard')}`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className={`px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/profile')}`}
                >
                  Profil
                </Link>
              </div>
            )}
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">
                  Salom, <span className="font-semibold">{user?.name}</span>
                </span>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition-colors"
                >
                  Chiqish
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 transition-colors"
              >
                Kirish
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
