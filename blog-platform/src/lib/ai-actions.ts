'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

// Your utility function to clean up the context
function stripMarkdown(markdown: string) {
  return markdown
    .replace(/[#*`_~-]/g, '') 
    .replace(/\[(.*?)]\(.*?\)/g, '$1') 
    .trim();
}

export async function askAI(userQuery: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const supabase = await createClient();

  const { data: blogs } = await supabase
    .from('blogs')
    .select('title, content, author_name')
    .limit(15);

  // Clean the blog content before sending to Gemini
  const blogContext = blogs?.map(b => 
    `Title: ${b.title}\nAuthor: ${b.author_name}\nContent: ${stripMarkdown(b.content)}`
  ).join("\n\n---\n\n") || "No blogs available.";

  try {
    const model = genAI.getGenerativeModel({ 
        model: "gemini-3-flash-preview",
        generationConfig: { temperature: 0.2 } // Slight temperature for better formatting
    });

    const prompt = `
      You are a professional Blog Assistant. 
      
      CONTEXT FROM DATABASE:
      ${blogContext}

      GOAL: Answer the user's question using ONLY the provided context.
      
      FORMATTING RULES:
      1. Use clean Markdown for your response (use bolding for key terms, bullet points for lists).
      2. Use clear spacing between paragraphs.
      3. If the answer is not in the context, say: "I'm sorry, I don't have information about that in my blog database."
      4. Do not mention that you are an AI or that you were given "context." Just answer naturally.

      USER QUESTION: ${userQuery}
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();

  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "The AI service is currently unavailable.";
  }
}