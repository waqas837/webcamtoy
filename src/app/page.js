import React from "react";
import WebcamToyComponent from "@/components/WebcamToyComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Webcam toy - Smile and Capture",
  description:
    "Webcam toy is for fun and you can use over 40+ filters, take photos and save them. Photo saved are in very high quality.",
  keywords: ["webcamtoy", "webcam toy"],
  openGraph: {
    title: "Webcam toy - Smile and Capture",
    description:
      "Webcam toy is for fun and you can use over 40+ filters, take photos and save them. Photo saved are in very high quality.",
    type: "website",
    image: "https://webcamtoy.pro/logo2.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcam toy - Smile and Capture",
    description:
      "Webcam toy is for fun and you can use over 40+ filters, take photos and save them. Photo saved are in very high quality.",
    image: "https://webcamtoy.pro/logo2.png",
  },
  alternates: {
    canonical: `https://webcamtoy.pro/`,
  },
};

const WebcamToy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 flex flex-col items-center">
        {/* Heading Above the Button */}
        <h2 className="text-3xl font-bold text-purple-700 mt-8">
          Get Ready for Fun!
        </h2>

        {/* Image Gallery Section */}
        <div className="max-w-3xl mx-auto px-4 mt-4">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
            Filters & Effects
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src={"/1.jpg"}
              alt="Gallery Image 1"
              className="rounded-lg shadow-md"
            />
            <img
              src={"/2.jpg"}
              alt="Gallery Image 2"
              className="rounded-lg shadow-md"
            />
            <img
              src={"/3.jpg"}
              alt="Gallery Image 3"
              className="rounded-lg shadow-md"
            />
            <img
              src={"/4.jpg"}
              alt="Gallery Image 4"
              className="rounded-lg shadow-md"
            />
          </div>
          <h4>And More 40+ filters</h4>
        </div>

        {/* WebcamToy Component Centered in the Middle of the Screen */}
        <WebcamToyComponent />

        {/* Remaining Content Below */}
        <div className="max-w-3xl mx-auto px-4 pb-4">
          {/* Hero Section */}
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              WebcamToy - Filters and Fun
            </h1>
            <p className="text-lg text-purple-800 mb-6">
              Transform your webcam experience and creative filters and instant
              photo capture. Express yourself and our collection of stunning
              effects!
            </p>
          </div>

          {/* Features Section */}
          <div className="py-4">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  Real-time Filters During Webcam oOpened
                </h3>
                <p className="text-sm text-purple-600">
                  Easily beautiful filters in real-time. From vintage to
                  dramatic effects, find your perfect style.
                </p>
              </div>
              <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  Instant Capture and Gallery Preview
                </h3>
                <p className="text-sm text-purple-600">
                  Take photos instantly with your selected filter. Save your
                  favorite moments in highy quality.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="py-4 mb-8">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              How to Use Webcam Toy?
            </h2>
            <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl p-6">
              <ol className="list-decimal list-inside space-y-3 text-purple-800">
                <li>
                  Click the button Ready for fun and allow camera access when
                  prompted
                </li>
                <li>
                  User Right and Left arrows for your selection of stunning
                  filters
                </li>
                <li>Click the "Take Photo" button to capture your moment</li>
                <li>Find your photos in the gallery on the right</li>
                <li>Click "Save" to download any photo you like and love</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebcamToy;
