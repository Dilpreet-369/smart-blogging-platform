"use client";

import { useState, useEffect } from "react";
import { markdownToHtml } from "@/lib/markdownToHtml";
import Link from "next/link";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  // ✅ LIVE PREVIEW
  useEffect(() => {
    const convert = async () => {
      const converted = await markdownToHtml(markdown);
      setHtml(converted);
    };

    convert();
  }, [markdown]);

  // ✅ SAVE BLOG
  const handleSave = async () => {
    if (!title.trim() || !markdown.trim()) {
      alert("Title and content required!");
      return;
    }

    const converted = await markdownToHtml(markdown);

    const newPost = {
      id: Date.now(),
      title,
      markdown,
      html: converted,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("posts") || "[]");
    const updated = [newPost, ...existing];

    localStorage.setItem("posts", JSON.stringify(updated));

    alert("Blog saved!");

    // Reset fields
    setTitle("");
    setMarkdown("");
    setHtml("");
  };

  return (
    <div className="p-6">
      {/* ✅ BACK BUTTON */}
      <Link href="/home" className="text-blue-500">
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-bold mb-4 mt-2">Write Blog</h1>

      {/* TITLE INPUT */}
      <input
        type="text"
        placeholder="Blog Title"
        className="w-full border p-2 mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* MARKDOWN INPUT */}
      <textarea
        className="w-full h-40 border p-2"
        placeholder="Write markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      {/* SAVE BUTTON */}
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Save Blog
      </button>

      {/* PREVIEW */}
      <div
        className="mt-6 border p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}