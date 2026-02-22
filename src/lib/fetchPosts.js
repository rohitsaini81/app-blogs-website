// src/app/api/hello/route.js

// Create a model (maps to a MongoDB collection)

import { createClient } from '@supabase/supabase-js';

// Load from environment variables (recommended)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let isConnected = false;




export async function fetchBlogs() {
  try {
    
    const { data, error } = await supabase.from("blogs").select("*");
    console.log("Fetched users:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


// export async function fetchBlogPost(query) {
//   try {

//      const { data: blogs, error } = await supabase
//   .from("blogs")
//   .select("*")
//   .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

//     return blogs;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };





/**
 * Fetch a single video by title or description (case-insensitive)
 * @param {string} query - search string
 * @returns {Promise<Object|null>} video document
 */


export async function fetchVideoByQuery(query) {

  // Search title or description (case-insensitive)
  const video = await supabase.from("blogs").select("*").eq("title", query);
  return video; // returns a single document or null
}


export async function fetchBlogPost(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug)

    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('title', decodedSlug)
      .single() // returns the first matching row as an object

    if (error) throw error

    return data
  } catch (err) {
    console.error('Error fetching blog:', err)
    throw err
  }
}



export async function fetchBlogPostContent(blog_id) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('blog_id', blog_id)
      .single() // because we expect only one row

    if (error) throw error

    return data
  } catch (err) {
    console.error('Error fetching blogs:', err)
    throw err
  }
}






export async function fetchApps(platform) {
  const cleanPlatform = decodeURIComponent(platform || '').trim()

  try {
    const { data, error } = await supabase
      .from('app')
      .select('*')

    if (error) throw error
    if (!Array.isArray(data)) return []
    if (!cleanPlatform) return data

    const normalizedPlatform = cleanPlatform
      .toLowerCase()
      .replace(/\s+apps?$/, '')
      .trim()

    const filtered = data.filter((row) => {
      const candidates = [row.platform, row.category, row.os, row.type, row.name, row.title]
        .filter((value) => typeof value === 'string')
        .map((value) => value.toLowerCase())

      return candidates.some((value) => value.includes(normalizedPlatform))
    })

    // If filtering removes everything, return all rows so the page isn't empty.
    return filtered.length > 0 ? filtered : data
  } catch (err) {
    console.error('Error fetching apps:', err)
    return []
  }
}



export async function get_app(app_name) {
  const clean_app_name = decodeURIComponent(app_name)
  const app = 
    {
      hTitle: clean_app_name,
      app_icon: "https://picsum.photos/seed/app",
      category: "Coding, hacking",
      size_mb: "112",
      description: "this app is terminal emulator for coding and hacking in android os",
      app_details: "Free Download TikTok 42.7.2 Premium MOD Version Unlocked Ad-Free APK for Android. Create, share, and discover short videos. this app is terminal emulator for coding and hacking in android os",
      downloads: "12m",
      rating: "⭐ 4.",
      download_button: "http://github.com"
    }
    return app
}



// export async function GET() {
//   // const ok = await fetchd();
//   const ok = await fetchm();
//   return Response.json(ok)
// }

// export async function POST(req) {
//   const data = await req.json()
//   return Response.json({ received: data })
// }
