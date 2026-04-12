"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { publishBlog } from "@/app/actions/postblog";
// Dynamically import the editor to prevent SSR errors
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function WritePage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("**Start writing your story...**");


  return (
    <div className="h-screen bg-white dark:bg-[#0a0a0a] p-4 sm:p-8 overflow-y-scroll custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={() => publishBlog(title, content)}
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-medium hover:opacity-80 transition-all disabled:opacity-50 cursor-pointer"
          >
            Publish
          </button>
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="New Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-4xl sm:text-5xl font-serif font-bold border-none outline-none mb-6 bg-transparent placeholder-gray-300 dark:placeholder-gray-700"
        />

        {/* Markdown Editor */}
        <div
          className="border-t border-gray-100 dark:border-gray-800 pt-6 w-full max-w-5xl mx-auto h-[calc(100vh-150px)] "
          data-color-mode="auto"
        >
          <MDEditor
            value={content}
            onChange={(val) => setContent(val || "")}
            preview="live"
            height={1000} // Increased from 500 for better visibility
            visibleDragbar={false} // Clean look, removes the bottom drag handle
            className="!border-none !shadow-none dark:!bg-[#0a0a0a] text-lg font-sans [&_.w-md-editor-toolbar]:!py-4 [&_.w-md-editor-toolbar]:!px-2 [&_.w-md-editor-toolbar_svg]:!w-5 [&_.w-md-editor-toolbar_svg]:!h-5 [&_.w-md-editor-content]:!text-lg custom-scrollbar"
          />
        </div>
      </div>
    </div>
  );
}