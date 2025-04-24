import { blogPosts } from '@/lib/blogData';
import BlogCard from '@/components/BlogCard';

export const dynamic = 'force-dynamic'; // SSR

export default async function BlogPage() {
  // You can fetch from an API here instead of static `blogPosts`
  const posts = blogPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
