// src/app/about/page.js
export const metadata = {
  title: "About Us - Webcam Toy",
  description:
    "Learn more about Webcam Toy, our mission, and why we're the best choice for enhancing your webcam photos with 40+ filters.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-purple-700 mb-8 text-center">
        About Us
      </h1>
      <div className="prose prose-purple max-w-3xl mx-auto">
        <p>
          Welcome to <strong>Webcam Toy</strong>! We are passionate about
          bringing fun and creativity to your webcam experience. Our platform
          offers over 40+ filters and effects to transform your photos into
          unique masterpieces.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          Our Mission
        </h2>
        <p>
          Our mission is to provide a user-friendly and enjoyable tool for
          everyone to enhance their webcam photos. Whether you're a beginner or
          a photography enthusiast, Webcam Toy is designed for you.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          Why Choose Us?
        </h2>
        <ul>
          <li>
            <strong>40+ Filters</strong>: Explore a wide range of creative
            filters.
          </li>
          <li>
            <strong>Easy to Use</strong>: Simple and intuitive interface.
          </li>
          <li>
            <strong>High-Quality Photos</strong>: Save your photos in high
            resolution.
          </li>
        </ul>
        <p className="mt-8">
          Thank you for choosing Webcam Toy. Let's capture beautiful moments
          together!
        </p>
      </div>
    </div>
  );
}
