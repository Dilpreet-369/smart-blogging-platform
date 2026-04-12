'use server'

import { createClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

/**
 * Server Action to publish a new blog post.
 * This runs entirely on the server for security.
 */
export async function publishBlog(title: string, content: string) {
    // 1. Authenticate the user via Clerk
    const { userId } = await auth();

    if (!userId) {
        throw new Error("You must be logged in to publish a post.");
    }

    // 2. Basic Validation
    if (!title || title.trim().length < 5) {
        return { error: "Title is too short (minimum 5 characters)." };
    }
    if (!content || content.trim().length < 20) {
        return { error: "Content is too short (minimum 20 characters)." };
    }

    // 3. Initialize Supabase Server Client
    const supabase = await createClient();

    try {
        // 4. Fetch the author's full name from the 'profiles' table
        // We do this so we can "stamp" the blog with the name for faster reading later.
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', userId)
            .single();

        if (profileError || !profile) {
            console.error("Profile fetch error:", profileError);
            return { error: "User profile not found. Please complete onboarding." };
        }

        // 5. Insert the new blog post into the 'blogs' table
        const { error: blogError } = await supabase
            .from('blogs')
            .insert({
                title: title.trim(),
                content: content.trim(),
                author_id: userId,
                author_name: profile.full_name, // Stamping the name from profiles
            });

        if (blogError) {
            console.error("Supabase Insert Error:", blogError.message);
            return { error: "Failed to save the blog post to the database." };
        }

        // 6. Refresh the cache for the home/dashboard page
        // This tells Next.js to re-fetch the blog list so the new post shows up.
        revalidatePath('/dashboard', 'layout');
        revalidatePath('/', 'layout');

    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "An unexpected error occurred. Please try again." };
    }

    // 7. Redirect the user back to the main feed
    redirect("/dashboard");
}