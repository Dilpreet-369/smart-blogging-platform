"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@/lib/supabase/client";

export default function Interests({ userId }: { userId: string }) {
    const supabase = createClient();
    const { user } = useUser();
    const [name, setName] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag) // Remove if already there
                : [...prev, tag]                // Add if not there
        );
    };

    const tags = ["Technology", "Self Improvement", "Design", "Psychology", "Programming", "Cybersecurity", "Minimalism", "Culture"];

    const handleSubmit = async () => {
        if (!user) return;

        const { error } = await supabase
            .from('profiles')
            .upsert({
                id: user.id, // The "Anchor" Clerk ID
                full_name: name,
            });

        if (error) {
            console.log(error);
        } else {
            window.location.reload(); // Refresh to show the Dashboard
        }
    };

    return (
        <div className=" bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-green-200 dark:selection:bg-green-900">
            {/* Navigation Header */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center h-16 items-center">
                        <div className="flex items-center gap-4">
                            <span className="font-serif text-3xl font-bold tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                                BlogPlatform
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-md w-full mx-auto mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 py-10 px-10">
                <form className="relative group">
                    {/* Label with a technical/minimalist feel */}
                    <label
                        htmlFor="fullname"
                        className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-1 ml-1 transition-colors group-focus-within:text-black dark:group-focus-within:text-white"
                    >
                        Full Name
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Type your name..."
                            onChange={(e) => { setName(e.target.value) }}
                            className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 py-4 text-2xl font-serif outline-none transition-all focus:border-black dark:focus:border-white placeholder:text-gray-200 dark:placeholder:text-gray-800"
                            required
                        />

                        {/* Animated Underline Accent */}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black dark:bg-white transition-all duration-500 group-focus-within:w-full" />
                    </div>

                    <p className="mt-4 text-xs text-gray-400 dark:text-gray-600 font-sans italic">
                        This is how you'll appear to other readers.
                    </p>
                </form>
            </div>
            <div className="flex flex-col items-center w-full px-8 text-center py-10">
                <h1 className="text-3xl sm:text-5xl font-serif mb-4 tracking-tight text-gray-900 dark:text-white leading-tight">
                    What are you interested in?
                </h1>
                <p className="text-gray-500 dark:text-gray-400 font-sans max-w-md">
                    Help us personalize your feed. Choose your favorite topics to get started.
                </p>

                {/* This is where your tags will go later */}
                <div className="mt-10 max-w-3xl flex flex-wrap justify-center gap-3">
                    {tags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);

                        return (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => toggleTag(tag)}
                                className={`
                                    px-6 py-2.5 rounded-full border transition-all active:scale-95 hover:cursor-pointer text-sm font-medium
                                    ${isSelected
                                        ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                        : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
                                    }
                                `}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>

                <button className="mt-10 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-lg rounded-full px-10 py-4 shadow-lg font-medium w-fit active:scale-95 hover:cursor-pointer" onClick={handleSubmit}>
                    Continue
                </button>
            </div>
        </div>
    );
}