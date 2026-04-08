"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(stored);
  }, []);

  // ✅ DELETE FUNCTION
  const handleDelete = (id: number) => {
    const updated = posts.filter((post) => post.id !== id);
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      {/* ✅ NAVIGATION */}
      <Link href="/write" className="px-4 py-2 bg-black text-white">
        Write Blog
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-4">Home Page</h1>

      {/* ✅ EMPTY STATE */}
      {posts.length === 0 && <p>No blogs yet. Create one!</p>}

      {/* ✅ BLOG LIST */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg p-4 mb-4 shadow"
        >
          {/* TITLE */}
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>

          {/* DATE */}
          <p className="text-sm text-gray-500 mb-2">
            {new Date(post.createdAt).toLocaleString()}
          </p>

          {/* CONTENT */}
          <div
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* DELETE BUTTON */}
          <button
            onClick={() => handleDelete(post.id)}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}