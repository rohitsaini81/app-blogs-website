import Link from 'next/link';

const BlogCard = ({ post }) => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition duration-300">
      {post.image ? (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          No Image
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
