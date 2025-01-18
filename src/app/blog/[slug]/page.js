import { blogs } from "@/data";
import Script from "next/script";
import Link from "next/link";

// Generate metadata for the Blog Post Page
export async function generateMetadata({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.meta.title,
    description: blog.meta.description,
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta.title,
      description: blog.meta.description,
      images: [blog.image],
    },
  };
}

export default function BlogPost({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  // Function to find related posts based on shared keywords
  const getRelatedPosts = (currentBlog) => {
    return blogs
      .filter(
        (relatedBlog) =>
          relatedBlog.id !== currentBlog.id && // Exclude the current blog
          relatedBlog.keywords.some((keyword) =>
            currentBlog.keywords.includes(keyword)
          ) // Check for shared keywords
      )
      .slice(0, 3); // Limit to 3 related posts
  };

  const relatedPosts = getRelatedPosts(blog);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* JSON-LD Schema */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.schema) }}
      />

      {/* Back to All Blog Posts Button */}
      <div className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          All Blog Posts
        </Link>
      </div>

      {/* Blog Post Content */}
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-5xl font-bold text-purple-700 mb-8">
          {blog.title}
        </h1>

        {/* Blog Meta (Optional) */}
        <div className="flex items-center space-x-4 text-purple-600 mb-8">
          <span>By Admin</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        {/* Blog Image */}
        <div className="h-96 relative rounded-xl overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-purple prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Related Post Image */}
                <div className="h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Related Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-purple-600 mb-4">{post.description}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-pink-600 hover:text-purple-600 font-medium transition-colors duration-300"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
