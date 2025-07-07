import { Camera, Gift, Heart, Share2, Eye } from "lucide-react";

export async function generateMetadata({ searchParams }) {
  const imgUrl = searchParams?.img;

  if (!imgUrl) {
    return {
      title: "Shared Photo Not Found | WebcamToy.pro",
      description: "Create and share amazing photo effects with WebcamToy.pro",
    };
  }

  return {
    title: "Your Friend Shared an Amazing Photo! | WebcamToy.pro",
    description:
      "Check out this stunning photo effect and create your own at WebcamToy.pro",
    openGraph: {
      title: "Your Friend Shared an Amazing Photo! | WebcamToy.pro",
      description:
        "Check out this stunning photo effect and create your own at WebcamToy.pro",
      image: { imgUrl },
      url: "https://webcamtoy.pro",
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Friend Shared an Amazing Photo! | WebcamToy.pro",
      description:
        "Check out this stunning photo effect and create your own at WebcamToy.pro",
      image: { imgUrl },
    },
  };
}

export default function SharePage({ searchParams }) {
  const imgUrl = searchParams?.img;

  if (!imgUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-white/20">
          <Gift className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-bounce" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Oops! Image Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The shared photo is no longer available.
          </p>
          <a
            href="https://webcamtoy.pro"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
          >
            <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Create Your Own Photo
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl w-full border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-100 rounded-full text-purple-700 mb-6">
            <Gift className="w-5 h-5" />
            <span>Your friend shared a photo with you!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image Preview */}
          <div className="relative group order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl" />
              <img
                src={imgUrl}
                alt="Shared photo"
                className="rounded-xl w-full shadow-2xl transform transition duration-300 hover:scale-[1.02]"
              />
            </div>
            <a
              href={imgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition"
            >
              <Eye className="w-4 h-4" />
              Click Here To Show The Image
            </a>
          </div>

          {/* Right side - Call to Action */}
          <div className="space-y-8">
            <div className="space-y-4">
              <a
                href="https://webcamtoy.pro"
                className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Create Your Own Photo
              </a>

              <div className="text-center">
                <span className="text-sm text-gray-500">
                  Join millions creating amazing photos at WebcamToy.pro
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Share2 className="w-5 h-5 text-purple-500" />
                  <span>Easy to Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
