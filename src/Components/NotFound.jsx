import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="text-xl mt-2 text-gray-700">Page Not Found</p>
      <p className="text-gray-500 mt-1">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
