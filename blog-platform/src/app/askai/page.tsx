"use client";

import { useState } from "react";
import { askAI } from "@/lib/ai-actions";
import { Sparkles, Send, Loader2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BlogRenderer from "@/components/blog-renderer";

export default function AskAIPage() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setAnswer("");
    const query = input;
    setInput("");

    const result = await askAI(query);
    setAnswer(result || "No response generated.");
    setIsLoading(false);
  };

  return (
    <div className="relative flex flex-col w-full h-screen bg-[#FBFBFB] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden font-sans">
      
      {/* Top Navigation - Minimalist Apple Style */}
      <nav className="z-20 flex items-center justify-between w-full px-6 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-100 dark:border-white/10">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-xs uppercase tracking-widest font-bold opacity-50">Smart Assistant</span>
        </div>
        <div className="w-10" /> {/* Spacer for balance */}
      </nav>

      {/* Main Conversation Area */}
      <main className="flex-1 w-full overflow-y-auto custom-scrollbar scroll-smooth">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-40">
          {!answer && !isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] animate-in fade-in zoom-in duration-1000">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-center bg-gradient-to-b from-black to-gray-400 dark:from-white dark:to-gray-600 bg-clip-text text-transparent">
                How can I help you <br /> with your blogs?
              </h1>
              <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 font-medium">
                Search through your database or brainstorm new ideas.
              </p>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* User Query (Optional: Could add back if you want a chat history feel) */}
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full shadow-lg shadow-purple-500/20">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold tracking-tight uppercase opacity-40">Response</span>
                </div>

                <div className="pl-11 prose prose-neutral dark:prose-invert max-w-none">
                  <BlogRenderer content={answer} />
                </div>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex items-center gap-4 pl-11 mt-12 animate-pulse">
              <Loader2 className="w-5 h-5 animate-spin text-purple-500" />
              <span className="text-sm font-medium text-gray-400">Thinking deeply...</span>
            </div>
          )}
        </div>
      </main>

      {/* Floating Input Bar - The "Dynamic Island" Inspiration */}
      <footer className="absolute bottom-0 left-0 w-full px-6 py-10 bg-gradient-to-t from-white dark:from-black via-white/90 dark:via-black/90 to-transparent">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleAsk}
            className="group relative flex items-center bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-transparent focus-within:border-purple-500/30 rounded-2xl p-1.5 transition-all duration-300 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] focus-within:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent px-4 py-3 outline-none text-[17px] placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:hover:scale-100 transition-all duration-200 shadow-sm"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </form>
          <p className="mt-3 text-center text-[11px] font-medium text-gray-400 tracking-wide uppercase">
            Intelligence by Gemini 3 Flash
          </p>
        </div>
      </footer>
    </div>
  );
}