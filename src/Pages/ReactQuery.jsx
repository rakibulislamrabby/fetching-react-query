import { useQuery } from "@tanstack/react-query";
import React from "react";
import { newFetch } from "../API/newApi";

export default function ReactQuery() {
  const { data } = useQuery({
    queryKey: ["posts"], // useState
    queryFn: newFetch, // useEffect
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-12 px-6 pt-28">
      <div className="text-4xl text-white font-bol text-center pb-10">Use React Query</div>
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {data?.map((post) => (
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
            <p className="mt-4 text-gray-300 leading-relaxed">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
