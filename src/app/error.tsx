'use client';
import "./globals.css";

import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-10 text-center max-w-md">

        <h1 className="text-3xl font-semibold text-gray-900">
          Something went wrong
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          An unexpected error occurred. Please try again or return home.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={() => reset()}
            className="
              h-10 px-6 rounded-md
              bg-linear-to-b
              from-blue-400 to-blue-600
              text-white text-sm font-medium
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
              hover:from-blue-500 hover:to-blue-700
              transition
            "
          >
            Try again
          </button>

          <Link
            href="/"
            className="
              h-10 px-6 rounded-md
              border border-gray-300
              text-sm font-medium text-gray-700
              flex items-center justify-center
              hover:bg-gray-100
              transition
            "
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>
  );
}
