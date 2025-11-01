import { useRouteError, Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6">
      <div className="max-w-lg text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
        <h1 className="text-5xl font-extrabold mb-2">Oops!</h1>
        <p className="text-lg mb-4">Something went wrong.</p>

        {error && (
          <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded-lg overflow-auto text-left border border-gray-200 dark:border-gray-700">
            {error.statusText || error.message || "Unknown error"}
          </pre>
        )}

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition duration-200"
        >
          Go Back Home
        </Link>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        If the problem persists, please contact support.
      </p>
    </div>
  );
};

export default ErrorPage;
