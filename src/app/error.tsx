'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h1>
          <p className="text-gray-600 mb-8">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details (Development):</h3>
              <p className="text-sm text-red-700 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Still having issues? <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">Contact our support team</Link></p>
        </div>
      </div>
    </div>
  );
}