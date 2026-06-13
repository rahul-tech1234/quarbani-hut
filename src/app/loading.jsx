export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      
      <div className="text-center">
        
        {/* Spinner */}
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-700">
          Loading data...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait a moment
        </p>

      </div>

    </div>
  );
}