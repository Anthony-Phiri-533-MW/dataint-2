import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="px-6 md:px-[82px] py-[60px] bg-[#EBEFF6] min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#001538] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link 
          href="/"
          className="inline-block bg-[#001538] text-white px-6 py-3 rounded-lg hover:bg-[#002a5c] transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
