import Link from "next/link";

const notFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        
        <h1 className="text-4xl font-bold text-red-500">Oops!</h1>

        <h2 className="mt-2 text-xl font-semibold text-gray-800">
          Something went wrong
        </h2>

        <p className="mt-3 text-gray-500">
          An unexpected error has occurred. Please try again.
        </p>

        <div className="mt-6 rounded-lg bg-gray-100 p-3 text-sm text-red-600">
          Error
        </div>

        <div className="mt-6 flex justify-center gap-3">
          
         
          <Link
            href="/"
            className="rounded-lg border px-4 py-2 text-gray-700 bg-linear-to-r from-purple-400 to-yellow-500"
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>
    );
};

export default notFound;


