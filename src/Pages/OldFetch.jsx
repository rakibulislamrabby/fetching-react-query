import React, { useEffect, useState } from 'react'
import { fetchPost } from '../API/api'


export default function OldFetch() {
  
  const [posts,setPosts]=useState([])

  const getPostData=async()=>{
    try {
      const res=await fetchPost()
      res.status===200? setPosts(res.data):[]

    } catch (error) {
      console.log(error)
      return [];
    }
  }
  useEffect(()=>{
    getPostData()
  },[])

  return (
    <div className="bg-black min-h-screen py-10 px-6 pt-14">
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto pt-18">
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
    </div>
  );
}
