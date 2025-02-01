import { useQuery } from "@tanstack/react-query";
import React from "react";
import { newFetch } from "../API/newApi";
import { NavLink } from "react-router-dom";

export default function ReactQuery() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], // useState
    queryFn: newFetch, // useEffect
    staleTime:3000,
  });
console.log(data);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-12 px-6 pt-28">
      <div className="text-4xl text-white font-bold text-center pb-10">
        Use React Query
      </div>

      {/*  Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-96">
          <div className="w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-300 mt-4 text-xl">Loading posts...</p>
        </div>
      )}

      {/* ❌ Error State */}
      {isError && (
        <div className="text-center text-red-500 text-xl mt-10">
          ❌ Failed to load posts: {error?.message}
        </div>
      )}

      {/*  Data Loaded */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {data?.map((post) => (
            <NavLink to={`/react-query/${post.id}`}>
              <div
                key={post.id}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <h1 className="text-center text-4xl font-extrabold text-blue-400 drop-shadow-lg mb-4">
                  #{post.id}
                </h1>
                <p className="text-2xl font-semibold text-purple-300">
                  {post.title}
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {post.body}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
