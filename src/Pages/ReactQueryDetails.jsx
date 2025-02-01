import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { newfetchDetails } from "../API/newApi";

export default function ReactQueryDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], 
    queryFn:()=>newfetchDetails(id), 
    // staleTime: 3000,
  });
console.log("data",data)
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6">
      {/* 🔄 Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-300 mt-4 text-lg">Fetching details...</p>
        </div>
      )}

      {/* ❌ Error State */}
      {isError && (
        <div className="text-red-500 text-xl text-center">
          ❌ Error: {error?.message}
        </div>
      )}

      {/* ✅ Post Details */}
      {!isLoading && !isError && data && (
        <div className="max-w-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-lg shadow-blue-500/30 hover:shadow-2xl transition-transform duration-300">
          <h1 className="text-center text-5xl font-extrabold text-blue-400 drop-shadow-lg mb-4">
            #{data.id}
          </h1>
          <h2 className="text-3xl font-semibold text-purple-300">
            {data.title}
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">{data.body}</p>
          <NavLink to="/react-query">
            <button
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={() => window.history.back()}
            >
              🔙 Go Back
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
