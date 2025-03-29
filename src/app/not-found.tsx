import Link from "next/link";

export default function FileNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! Page not found.</p>
      <Link href="/" className="mt-4">
        <span className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Go Home
        </span>
      </Link>
    </div>
  );
}
