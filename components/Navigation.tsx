'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : '';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold">
              Next.js Middleware
            </Link>

            {/* Public links - Desktop */}
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

            {/* Private links - Desktop */}
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

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-blue-500">
            {/* Public links - Mobile */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/')}`}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/about')}`}
            >
              Biz haqimizda
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/contact')}`}
            >
              Aloqa
            </Link>

            {/* Private links - Mobile */}
            {isAuthenticated && (
              <>
                <div className="border-t border-blue-500 my-2 pt-2">
                  <Link
                    href="/dashboard"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/dashboard')}`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/profile')}`}
                  >
                    Profil
                  </Link>
                </div>
              </>
            )}

            {/* Auth section - Mobile */}
            <div className="border-t border-blue-500 mt-2 pt-2">
              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 text-sm">
                    Salom, <span className="font-semibold">{user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                    }}
                    className="w-full text-left px-3 py-2 bg-red-500 rounded-md hover:bg-red-600 transition-colors mt-2"
                  >
                    Chiqish
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 bg-green-500 rounded-md hover:bg-green-600 transition-colors text-center"
                >
                  Kirish
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
