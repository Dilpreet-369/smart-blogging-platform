import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Dashboard from "@/components/dashboard";
import Interests from "@/components/interests";
export default async function DashboardPage() {
    const { userId } = await auth();

    // 1. If not logged in, send them back to landing/login
    if (!userId) {
        redirect("/");
    }

    const supabase = await createClient();

    // 2. Parallel Fetch: Profile and Posts
    const [profileRes, postsRes] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', userId).single(),
        supabase.from('posts').select('*').order('created_at', { ascending: false })
    ]);

    const profile = profileRes.data;
    const posts = postsRes.data || [];

    // 3. Logic: If profile is missing or name is empty, send to onboarding
    if (!profile || !profile.full_name) {
        return <Interests userId={userId} />;
    }

    // 4. Everything is ready: Render the UI
    return (
        <div className="min-h-screen bg-white dark:bg-[#050505]">
            <Dashboard profile={profile} />
        </div>
    );
}