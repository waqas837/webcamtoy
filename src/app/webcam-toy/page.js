import WebcamToyComponent from "@/components/WebcamToyComponent";

export const metadata = {
  title: "Webcam Toy - Fun Filters for Creative Photos",
  description:
    "Use Webcam Toy to take creative photos with over 40+ fun filters. Enhance your webcam experience and save high-quality images.",
  openGraph: {
    title: "Webcam Toy - Fun Filters for Creative Photos",
    description:
      "Use Webcam Toy to take creative photos with over 40+ fun filters. Enhance your webcam experience and save high-quality images.",
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
      "Use Webcam Toy to take creative photos with over 40+ fun filters. Enhance your webcam experience and save high-quality images.",
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
