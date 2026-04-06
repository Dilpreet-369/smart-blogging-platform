import React from 'react';
import { Search, Bell, Edit, BookmarkPlus, MoreHorizontal, TrendingUp, Sparkles } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    author: { name: 'Sarah Drasner', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    title: 'The Future of Web Development in 2026',
    description: 'A deep dive into the newest frameworks, server components, and why we are shifting back to simpler architectures while retaining powerful developer experiences.',
    date: 'Apr 2',
    readTime: '6 min read',
    topic: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    author: { name: 'Addy Osmani', avatar: 'https://i.pravatar.cc/150?u=addy' },
    title: 'Optimizing JavaScript for the Era of AI',
    description: 'How AI code assistants are changing the way we write and ship JavaScript, and what it means for overall browser performance and user experience.',
    date: 'Mar 28',
    readTime: '9 min read',
    topic: 'Performance',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    author: { name: 'Dan Abramov', avatar: 'https://i.pravatar.cc/150?u=dan' },
    title: 'React Server Components Explained',
    description: 'Everything you need to know about React Server Components and how they fundamentally change the mental model of building React applications today.',
    date: 'Mar 25',
    readTime: '12 min read',
    topic: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    author: { name: 'Cassie Evans', avatar: 'https://i.pravatar.cc/150?u=cassie' },
    title: 'Creating Beautiful Animations on the Web',
    description: 'A comprehensive guide to using CSS and modern JavaScript to create stunning, accessible micro-animations that enhance user experience delightfully.',
    date: 'Mar 20',
    readTime: '8 min read',
    topic: 'Design',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80',
  }
];

const TOPICS = ['Programming', 'Data Science', 'Technology', 'Self Improvement', 'Writing', 'Relationships', 'Machine Learning', 'Productivity'];

const TRENDING_POSTS = [
  { id: 1, author: 'Elon Musk', title: 'The Future of AI and Humanity', date: 'Apr 1', readTime: '5 min read' },
  { id: 2, author: 'Naval Ravikant', title: 'How to Get Rich (without getting lucky)', date: 'Mar 15', readTime: '15 min read' },
  { id: 3, author: 'Paul Graham', title: 'How to Do Great Work', date: 'Jul 20', readTime: '45 min read' },
  // { id: 4, author: 'Sam Altman', title: 'Moore\\'s Law for Everything', date: 'Mar 16', readTime: '10 min read' },
];

export default function Dashboard({ profile }: { profile: { full_name: string } }) {
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
              <div className="hidden md:flex ml-4 items-center bg-gray-50 dark:bg-gray-900 rounded-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border border-transparent dark:border-gray-800">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none focus:outline-none ml-2 text-sm w-48 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="hidden sm:flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-light">
                <Edit className="h-4 w-4" />
                Write
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative">
                <Bell className="h-6 w-6 font-light" strokeWidth={1.5} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#0a0a0a]"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 p-0.5 cursor-pointer hover:scale-105 transition-transform duration-200">
                <img
                  className="h-full w-full rounded-full object-cover border-2 border-white dark:border-[#0a0a0a]"
                  src="https://i.pravatar.cc/150?u=me"
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row mt-6 lg:mt-12 gap-12">

        {/* Left Column (Main Feed) */}
        <div className="w-full lg:w-[65%] xl:w-[70%]">

          {/* Main Feed Tabs */}
          <div className="flex border-b border-gray-100 dark:border-gray-800 mb-8 sticky top-16 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm z-40 pt-2 lg:pt-0">
            <button className="text-gray-400 dark:text-gray-500 pb-4 pr-6 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="flex items-center justify-center h-6 w-6 rounded-full border border-gray-300 dark:border-gray-600">
                +
              </span>
            </button>
            <button className="text-gray-900 dark:text-white pb-4 px-6 border-b-2 border-gray-900 dark:border-white font-medium text-sm transition-colors cursor-pointer">
              For you
            </button>
            <button className="text-gray-500 dark:text-gray-400 pb-4 px-6 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors cursor-pointer">
              Following
            </button>
            <button className="text-gray-500 dark:text-gray-400 pb-4 px-6 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors hidden sm:block cursor-pointer">
              Technology
            </button>
            <button className="text-gray-500 dark:text-gray-400 pb-4 px-6 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors hidden md:block cursor-pointer">
              React
            </button>
          </div>

          {/* Posts Feed */}
          <div className="flex flex-col gap-8 pb-20">
            {POSTS.map((post) => (
              <article key={post.id} className="flex flex-col sm:flex-row justify-between gap-6 group cursor-pointer border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900/50 -mx-4 px-4 rounded-xl transition-colors duration-300">
                <div className="flex-1 flex flex-col justify-center">

                  {/* Author Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <img src={post.author.avatar} alt={post.author.name} className="w-5 h-5 rounded-full" />
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{post.author.name}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-xs">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    <div className="hidden sm:flex items-center gap-1 text-yellow-500 ml-1">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Post Title & Description */}
                  <h2 className="text-2xl font-bold font-sans tracking-tight text-gray-900 dark:text-white mb-2 group-hover:underline decoration-2 underline-offset-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 font-serif leading-relaxed line-clamp-2 md:line-clamp-3 mb-4 sm:pr-8">
                    {post.description}
                  </p>

                  {/* Post Footer Metadata */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        {post.topic}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
                      <BookmarkPlus className="w-5 h-5 hover:text-gray-900 dark:hover:text-white transition-colors" strokeWidth={1.5} />
                      <MoreHorizontal className="w-5 h-5 hover:text-gray-900 dark:hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Post Cover Image */}
                <div className="w-full sm:w-[200px] h-48 sm:h-[134px] flex-shrink-0 mt-4 sm:mt-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="hidden lg:block w-[35%] xl:w-[30%] pl-8 border-l border-gray-100 dark:border-gray-800 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto pb-12 custom-scrollbar">

          <div className="pt-8">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-6">Staff Picks</h3>
            <div className="flex flex-col gap-6">
              {TRENDING_POSTS.slice(0, 3).map((post) => (
                <div key={post.id} className="flex gap-4 group cursor-pointer">
                  <img
                    src={`https://i.pravatar.cc/150?u=staff\${post.id}`}
                    alt={post.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">{post.author}</span>
                    <h4 className="text-base font-bold leading-tight group-hover:underline decoration-1 underline-offset-2 mb-2 dark:text-white">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-green-600 dark:text-green-400 text-sm mt-6 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors">
              See the full list
            </button>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-gray-900 dark:text-white" strokeWidth={1.5} />
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Recommended topics</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {TOPICS.map((topic, i) => (
                <button
                  key={i}
                  className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-transparent dark:border-gray-700 text-sm px-4 py-2 rounded-full transition-colors font-medium border-gray-200/50"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-6">Who to follow</h3>
            <div className="flex flex-col gap-6">
              {[
                { name: 'Guillermo Rauch', handle: '@rauchg', bio: 'CEO at Vercel. Creator of Next.js.' },
                { name: 'Lee Robinson', handle: '@leeerob', bio: 'VP of Product at Vercel. Teaching React & Next.js.' },
                { name: 'Linus Torvalds', handle: '@linus', bio: 'Creator of Linux and Git.' },
              ].map((user, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <img src={`https://i.pravatar.cc/150?u=\${user.handle}`} alt={user.name} className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{user.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{user.bio}</p>
                  </div>
                  <button className="text-sm border border-gray-900 dark:border-gray-600 dark:text-white px-3 py-1.5 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-gray-500">
              {['Help', 'Status', 'About', 'Careers', 'Blog', 'Privacy', 'Terms', 'Text to speech', 'Teams'].map(item => (
                <a key={item} href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb; 
          border-radius: 4px;
        }
        @media (prefers-color-scheme: dark) {
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #374151; 
          }
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #d1d5db; 
        }
      `}} />
    </div>
  );
}
