import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-red-600 text-4xl font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-600">
          You might want to check the URL or
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 font-semibold ml-1"
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
