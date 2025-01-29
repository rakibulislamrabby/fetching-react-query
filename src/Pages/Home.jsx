import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
        Welcome to My Fetching Site
      </h1>
      <p className="mt-4 text-xl text-gray-300 max-w-2xl text-center">
        Empowering developers with insights, tools, and community-driven
        solutions.
      </p>

      {/* Navigation Buttons */}
      <div className="mt-10 flex space-x-6">
        <button
          onClick={() => (window.location.href = "/old-fetch")}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
        >
          Old Fetch System
        </button>
        <button
          onClick={() => (window.location.href = "/react-query")}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 shadow-lg transition-transform transform hover:scale-105"
        >
          React Query
        </button>
      </div>
    </div>
  );
}
