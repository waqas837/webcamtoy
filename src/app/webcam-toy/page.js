import WebcamToyComponent from "@/components/WebcamToyComponent";

export const metadata = {
  title: "Webcam Toy - Fun Filters for Creative Photos",
  description:
    "Use Webcam Toy, the best online camera with 40+ fun filters! Enjoy a creative photo booth experience and capture high-quality images with your web cam.",
  keywords: [
    "webcam toy",
    "online camera",
    "camera online",
    "web cam",
    "photobooth",
    "photo booth",
    "cam",
    "webcamtoy",
    "webcam",
    "camera",
    "web cam toy",
    "camtoy",
  ],
  openGraph: {
    title: "Webcam Toy - Fun Filters for Creative Photos",
    description:
      "Use Webcam Toy, the best online camera with 40+ fun filters! Enjoy a creative photo booth experience and capture high-quality images with your web cam.",
    images: [
      {
        url: "https://webcamtoy.pro/logo2.png", // Add a cover image URL
        width: 1200,
        height: 630,
        alt: "Webcam Toy - Fun Filters for Creative Photos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcam Toy - Fun Filters for Creative Photos",
    description:
      "Use Webcam Toy, the best online camera with 40+ fun filters! Enjoy a creative photo booth experience and capture high-quality images with your web cam.",
    images: ["https://webcamtoy.pro/logo2.png"], // Add a cover image URL
  },
};

const Webcamtoy = () => {
  return (
    <div>
      <WebcamToyComponent />
    </div>
  );
};

export default Webcamtoy;
