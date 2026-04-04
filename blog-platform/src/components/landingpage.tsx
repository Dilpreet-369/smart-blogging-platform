"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-green-200 dark:selection:bg-green-900">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <span className="font-serif text-3xl font-bold tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                BlogPlatform
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button className="hidden sm:block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Write
              </button>
              
              {/* CLERK SIGN IN */}
              <SignInButton mode="modal">
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium hover:cursor-pointer">
                  Sign In
                </button>
              </SignInButton>

              {/* CLERK SIGN UP */}
              <SignUpButton mode="modal">
                <button className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-sm font-medium rounded-full px-5 py-2 hover:cursor-pointer">
                  Get Started
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center h-[calc(100vh-64px)] w-full overflow-hidden px-8 sm:px-20">
        <h1 className="text-6xl sm:text-8xl font-serif mb-4 tracking-tight text-gray-900 dark:text-white leading-tight">
          Human <br className="sm:hidden" /> perspectives.
        </h1>
        <div className="space-y-1 mb-10">
          <p className="text-xl sm:text-2xl font-serif italic text-gray-600 dark:text-gray-300">
            Where ideas breathe.
          </p>
          <p className="text-xl sm:text-2xl font-serif italic text-gray-600 dark:text-gray-300">
            Ink & Insight
          </p>
        </div>

        {/* HERO START BUTTON - Usually leads to Sign Up for new users */}
        <SignUpButton mode="modal" >
          <button className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-lg rounded-full px-10 py-4 shadow-lg font-medium w-fit active:scale-95">
            Start Reading
          </button>
        </SignUpButton>
      </div>
    </div>
  );
}