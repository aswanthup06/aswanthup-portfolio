import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-10 text-center max-w-md">

        <h1 className="text-4xl font-bold text-gray-900">404</h1>

        <p className="text-sm text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            mt-6 h-10 px-6 rounded-md
            bg-linear-to-b
            from-blue-400 to-blue-600
            text-white text-sm font-medium
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500 hover:to-blue-700
            transition
          "
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}
