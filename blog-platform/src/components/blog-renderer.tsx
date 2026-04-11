"use client";

import dynamic from "next/dynamic";

// Now we can safely use ssr: false inside a Client Component
const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);

export default function BlogRenderer({ content }: { content: string }) {
  return (
    <div data-color-mode="auto" className="w-full h-screen overflow-y-auto custom-scrollbar">
      <MarkdownPreview
        source={content}
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  );
}