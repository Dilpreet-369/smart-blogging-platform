
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import BlogRenderer from "@/components/blog-renderer";
import BackButton from "@/components/back-button";
// import { useRouter } from "next/navigation";

// Define the type for the params properly for Next.js 15
type tParams = Promise<{ id: string }>;

export default async function BlogDetailPage(props: { params: tParams }) {
  const { id } = await props.params;
  const supabase = await createClient();
    // const router = useRouter();

  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
        <BackButton />
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 dark:text-white leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-gray-500 text-sm">
          <span className="font-medium text-gray-900 dark:text-gray-200">
            {post.author_name}
          </span>
          <span>•</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
      </header>

      <hr className="mb-10 border-gray-100 dark:border-gray-800" />

      {/* Pass the content to our Client-Side renderer */}
      <BlogRenderer content={post.content} />
    </div>
  );
}