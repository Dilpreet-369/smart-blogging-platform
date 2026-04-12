import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import BlogRenderer from "@/components/blog-renderer";
import BackButton from "@/components/back-button";

type tParams = Promise<{ id: string }>;

export default async function BlogDetailPage(props: { params: tParams }) {
  const { id } = await props.params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) return notFound();

  return (
    <div className="h-screen bg-[#FBFBFB] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] font-sans selection:bg-purple-100 dark:selection:bg-purple-900/30 custom-scrollbar overflow-y-auto ">
      
      {/* Top Sticky Navigation */}
      <nav className="sticky top-0 z-30 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-100 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <BackButton />
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
            Reading Now
          </div>
          <div className="w-10" /> {/* Symmetry spacer */}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-16 md:py-24 px-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
        
        {/* Editorial Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-8 bg-gradient-to-b from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4">
            {/* Author Initial Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/10 rounded-full border border-gray-200 dark:border-white/10 text-xs font-bold">
              {post.author_name?.charAt(0).toUpperCase()}
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                {post.author_name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Published on {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </header>

        {/* Minimalist Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-12 md:mb-16" />

        {/* Content Area */}
        <article className="prose prose-neutral dark:prose-invert max-w-none 
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-p:leading-relaxed prose-p:text-[#424245] dark:prose-p:text-[#A1A1A6]
          prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-purple-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl">
          
          <BlogRenderer content={post.content} />
          
        </article>

        {/* Footer Signature */}
        <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-white/10 text-center">
          <p className="text-sm text-gray-400 font-medium">
            End of Article
          </p>
        </footer>
      </main>
    </div>
  );
}