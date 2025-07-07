import HeroImagesDisplay from "@/components/HeroImages/HeroImagesDisplay";
import BlogSection from "@/components/HomeSections/BlogsSection";
import StartButton from "@/components/HomeSections/Startbutton";

export const metadata = {
  title: "Official 📷 Webcam Toy - ✔️ 50+ Webcam Filters 2025",
  description:
    "Webcam Toy Official is for fun and you can use over 40+ filters, take photos, and save them. Photos saved are in very high quality.",
  keywords: ["webcamtoy", "webcam toy", "webcam oy", "toycam", "camera toy"], // Added "camera toy"
  openGraph: {
    title: "Official 📷 Webcam Toy - ✔️ 50+ Webcam Filters 2025",
    description:
      "Webcam Toy Official is for fun and you can use over 40+ filters, take photos, and save them. Photos saved are in very high quality.",
    type: "website",
    image: "https://webcamtoy.pro/logo2.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Official 📷 Webcam Toy - ✔️ 50+ Webcam Filters 2025",
    description:
      "Webcam Toy Official is for fun and you can use over 40+ filters, take photos, and save them. Photos saved are in very high quality.",
    image: "https://webcamtoy.pro/logo2.png",
  },
  alternates: {
    canonical: `https://webcamtoy.pro/`,
  },
};

const WebcamToy = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="px-6 py-12">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-purple-700 mb-4">
              Get Ready for Fun!
            </h2>
            <p className="text-lg text-purple-800 mb-6">
              Online Camera with Filters
            </p>
            <StartButton />
          </div>
          {/* Hero Image Gallery */}
          <HeroImagesDisplay />
        </div>

        {/* Features Section */}
        <div className="py-12 px-6 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-purple-700 mb-8">
            Features of WebcamToy (or Toycam)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-purple-700 mb-4">
                Real-time Filters
              </h4>
              <p className="text-purple-600">
                Apply filters in real-time for a dynamic webcam experience.
                Choose from a wide range of styles!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-purple-700 mb-4">
                Instant Photo Capture
              </h4>
              <p className="text-purple-600">
                Take high-quality photos instantly with your selected filter and
                save your favorites.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-purple-700 mb-4">
                Easy to Use
              </h4>
              <p className="text-purple-600">
                With a user-friendly interface, it's simple to start taking fun
                and creative photos in seconds!
              </p>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="py-12 px-6">
          <h3 className="text-3xl font-bold text-center text-purple-700 mb-8">
            How to Use Webcam Toy (or Toycam)?
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">
                  1. Click "Ready for Fun"
                </h4>
                <p className="text-purple-600">
                  Allow camera access and get ready to have fun with over 40+
                  filters.
                </p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">
                  2. Choose a Filter
                </h4>
                <p className="text-purple-600">
                  Use the arrows to choose your desired filter and add a
                  creative touch.
                </p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">
                  3. Take a Photo
                </h4>
                <p className="text-purple-600">
                  Capture your moment and save the high-quality image to your
                  gallery.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Section (Optional) */}
        <BlogSection />
        {/* FAQ Section */}
        <div className="py-12 px-6 bg-white">
          <h3 className="text-3xl font-bold text-center text-purple-700 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-6 ">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Is "webcam oy" the same as "webcam toy"?
              </h4>
              <p className="text-purple-600">
                Yes! "Webcam oy" is often a typo for "webcam toy." You're in the
                right place to enjoy over 40+ fun filters and effects.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                What is Toycam?
              </h4>
              <p className="text-purple-600">
                Toycam is another name for Webcam Toy. It's a fun tool to take
                creative photos with over 40+ filters and effects.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                What is a Camera Toy?
              </h4>
              <p className="text-purple-600">
                A camera toy, like Webcam Toy, is a fun tool to take creative
                photos with filters and effects. It's perfect for adding a
                playful touch to your webcam photos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebcamToy;
