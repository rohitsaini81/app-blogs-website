import BlogContent from '@/components/BlogContent';
import { blogPosts } from '@/lib/blogData';

export default async function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BlogContent post={post} />
    </div>
  );
}
