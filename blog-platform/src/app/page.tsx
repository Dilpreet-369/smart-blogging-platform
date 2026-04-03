import AuthPop from "./authpop";
import { useState } from "react";
export default function App() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && <AuthPop />}
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
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                  Write
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                  Sign In
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-black hover:text-gray-900 dark:hover:text-white transition-colors text-sm border border-gray-600 dark:border-gray-300 rounded-full px-4 py-2 bg-gray-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <div className='flex flex-col justify-center h-[600px] w-full overflow-hidden pl-20'>
          <h1 className='text-8xl font-royal mb-4 tracking-tight drop-shadow-sm text-gray-900 dark:text-white'>
            Human perspectives.
          </h1>
          <p className='text-2xl font-royal italic text-gray-600 dark:text-gray-300 mb-2'>
            Where ideas breathe.
          </p>
          <p className='text-2xl font-royal italic text-gray-600 dark:text-gray-300 mb-10'>
            Ink & Insight
          </p>
          <button className="flex items-center gap-2 text-white bg-black dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-lg rounded-full px-8 py-3 shadow-md border border-transparent font-sans w-fit">
            Start Reading
          </button>
        </div>
      </div>
    </div>
  )
}