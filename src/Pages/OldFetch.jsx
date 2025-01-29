import React, { useEffect, useState } from "react";
import { fetchPost } from "../API/api";

export default function OldFetch() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPostData = async () => {
    try {
      const res = await fetchPost();
      if (res.status === 200) {
        setPosts(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="bg-black min-h-screen py-10 px-6 pt-14">
      <div className="max-w-4xl mx-auto pt-18">
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-300 mt-4 text-lg">Loading posts...</p>
          </div>
        )}

        {/*  Error State */}
        {isError && (
          <div className="text-center text-red-500 text-lg mt-10">
            ❌ Failed to load posts. Please try again later.
          </div>
        )}

        {/* Data Loaded */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <h1 className="text-center text-3xl font-extrabold text-blue-400 mb-3">
                  {post.id}
                </h1>
                <p className="font-bold text-xl text-purple-300">
                  Title: {post.title}
                </p>
                <p className="mt-2 text-gray-300">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
