import { createClient } from '@/lib/supabase/server'; // Or your MongoDB config

export async function getPosts() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
  
  return data;
}