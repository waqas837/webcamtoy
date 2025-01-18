import Link from "next/link";
import { blogs } from "@/data"; // Replace with your data source

export default function BlogSection() {
    // Get the first 3 blog posts
    const latestPosts = blogs.slice(0, 3);

    return (
        <div className="py-12 px-6 bg-white shadow-lg">
            <h3 className="text-3xl font-bold text-center text-purple-700 mb-8">
                Latest Blog Posts
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
                {/* Map through the first 3 blog posts */}
                {latestPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Blog Image */}
                        <div className="h-48 relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Blog Content */}
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-purple-700 mb-3">
                                {post.title}
                            </h4>
                            <p className="text-purple-600 mb-4">{post.description}</p>
                            <Link
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
                            </Link>
                        </div>
                    </div>
                ))}

                {/* "View All Blogs" Link */}
                <div className="text-center mt-8">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-pink-600 hover:text-purple-600 font-medium transition-colors duration-300"
                    >
                        View All Blogs
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
                    </Link>
                </div>
            </div>
        </div>
    );
}