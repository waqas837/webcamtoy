import { blogs } from "@/data";

// Generate metadata for the Blog Page
export async function generateMetadata() {
  return {
    title: "Blog - Webcam Toy",
    description:
      "Explore our blog for tips, tutorials, and guides on using Webcam Toy, cam filters, and more.",
    openGraph: {
      title: "Blog - Webcam Toy",
      description:
        "Explore our blog for tips, tutorials, and guides on using Webcam Toy, cam filters, and more.",
      images: [
        {
          url: "https://yourwebsite.com/images/blog-cover.jpg", // Default blog cover image
          width: 1200,
          height: 630,
          alt: "Blog - Webcam Toy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog - Webcam Toy",
      description:
        "Explore our blog for tips, tutorials, and guides on using Webcam Toy, cam filters, and more.",
      images: ["https://yourwebsite.com/images/blog-cover.jpg"], // Default blog cover image
    },
  };
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-purple-700 mb-12 text-center">
        Guides And Help
      </h1>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="h-48 relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover object-center" // Center the image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">
                {blog.title}
              </h2>
              <p className="text-purple-600 mb-4">{blog.description}</p>
              <a
                href={`/blog/${blog.slug}`}
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
  );
}
