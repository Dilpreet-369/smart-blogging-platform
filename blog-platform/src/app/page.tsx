import { auth } from "@clerk/nextjs/server";
import LandingPage from "@/components/landingpage"; 
import Dashboard from "@/components/dashboard"; 
import Interests from "@/components/interests";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return <LandingPage />;
  }
  else{
    return <Dashboard />;
  }
}