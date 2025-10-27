'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary - React class component
 * Client component'lardagi xatoliklarni ushlaydi va fallback UI ko'rsatadi
 *
 * Qanday ishlaydi:
 * 1. Child component'da xatolik yuz bersa
 * 2. getDerivedStateFromError() chaqiriladi → hasError: true
 * 3. componentDidCatch() log qiladi
 * 4. Fallback UI render bo'ladi
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // Xatolik yuz berganda state'ni yangilash
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // Xatolikni log qilish
  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
            {/* Error Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            {/* Error Message */}
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Xatolik yuz berdi
            </h2>
            <p className="text-center text-gray-600 mb-6">
              {this.state.error?.message || 'Kutilmagan xatolik yuz berdi'}
            </p>

            {/* Reset Button */}
            <button
              onClick={() => this.setState({ hasError: false, error: undefined })}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Qayta urinish
            </button>
          </div>
        </div>
      );
    }

    // Xatolik bo'lmasa, normal render
    return this.props.children;
  }
}
