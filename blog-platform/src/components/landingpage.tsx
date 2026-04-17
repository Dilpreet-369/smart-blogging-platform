"use client";

import { useState } from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu, X, Sparkles } from "lucide-react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 overflow-hidden">

      {/* --- RUNNING WAVES BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Wave 1 */}
          <path d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z" fill="url(#waveGradient)">
            <animate attributeName="d"
              values="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z; M0 50 Q 25 60 50 50 T 100 50 V 100 H 0 Z; M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z"
              dur="10s" repeatCount="indefinite" />
          </path>
          {/* Wave 2 */}
          <path d="M0 60 Q 25 50 50 60 T 100 60 V 100 H 0 Z" fill="url(#waveGradient)" opacity="0.5">
            <animate attributeName="d"
              values="M0 60 Q 25 70 50 60 T 100 60 V 100 H 0 Z; M0 60 Q 25 50 50 60 T 100 60 V 100 H 0 Z; M0 60 Q 25 70 50 60 T 100 60 V 100 H 0 Z"
              dur="15s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      {/* --- END BACKGROUND --- */}

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-[100] border-b border-gray-100 dark:border-white/5 bg-white/70 dark:bg-black/70 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="font-serif text-2xl font-bold tracking-tighter dark:text-white">
              SmartBlog
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors">About</a>

            <div className="h-4 w-[1px] bg-gray-200 dark:bg-white/10" />

            <SignInButton mode="modal">
              <button className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                Get Started
              </button>
            </SignUpButton>
          </div>

          {/* Mobile Toggle (Breadcrumb/Menu Icon) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`
        absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-100 dark:border-white/5 
        transition-all duration-300 ease-in-out origin-top
        ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"}
      `}>
          <div className="flex flex-col p-6 gap-6">
            <a href="#" className="text-lg font-medium border-b border-gray-50 dark:border-white/5 pb-4">Features</a>
            <a href="#" className="text-lg font-medium border-b border-gray-50 dark:border-white/5 pb-4">About</a>

            <div className="flex flex-col gap-4 pt-2">
              <SignInButton mode="modal">
                <button className="w-full py-4 text-center font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 rounded-2xl">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="w-full py-4 text-center font-bold bg-black text-white dark:bg-white dark:text-black rounded-2xl">
                  Get Started
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-64px)] w-full px-8 sm:px-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl sm:text-8xl font-serif mb-6 tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Intelligence <br className="sm:hidden" /> in Every Ink.
          </h1>
          <div className="space-y-2 mb-12">
            <p className="text-xl sm:text-3xl font-serif italic text-gray-500 dark:text-gray-400">
              Where your blogs grow a brain.
            </p>
          </div>

          <SignUpButton mode="modal">
            <button className="group relative bg-black text-white dark:bg-white dark:text-black hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all text-xl rounded-full px-12 py-5 font-medium w-fit active:scale-95 flex items-center gap-3">
              Start Building
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}