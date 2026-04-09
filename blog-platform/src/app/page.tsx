import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import LandingPage from "@/components/landingpage";
import Interests from "@/components/interests";
import { redirect } from "next/navigation";
export default async function Page() {
  const { userId } = await auth();

  // 1. Not logged in to Clerk? Show Landing Page
  if (!userId) return <LandingPage />;

  // 2. Connect to Supabase
  const supabase = await createClient();

  // 3. Try to find the user profile
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', userId)
    .single();

  // 4. LOGIC: If no profile exists, or if full_name is empty/null
  if (!profile || !profile.full_name) {
    return <Interests userId={userId} />; 
  }

  // 5. Profile exists with a name? Show Dashboard
  redirect("/dashboard");
}