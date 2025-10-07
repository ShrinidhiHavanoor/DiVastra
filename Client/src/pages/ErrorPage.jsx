// src/pages/ErrorPage.jsx
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg mt-4">Something went wrong.</p>
      <pre className="mt-2 text-gray-600">{error.statusText || error.message}</pre>
    </div>
  );
};

export default ErrorPage;
