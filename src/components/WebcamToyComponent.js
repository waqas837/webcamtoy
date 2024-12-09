"use client";
import React, { useEffect, useRef, useState } from "react";

const WebcamToy = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [isCameraStarted, setIsCameraStarted] = useState(false);
  const filters = {
    none: "none",
    grayscale: "grayscale(100%)",
    sepia: "sepia(100%)",
    invert: "invert(100%)",
    warm: "sepia(50%) saturate(150%) hue-rotate(-15deg)",
    cool: "saturate(150%) hue-rotate(15deg)",
    // Vintage and Retro Filters
    vintage: "sepia(40%) brightness(90%) contrast(110%)",
    retroFade: "sepia(30%) saturate(90%) brightness(120%) contrast(85%)",
    oldFilm: "grayscale(100%) sepia(20%) brightness(90%) contrast(120%)",
    polaroid: "sepia(20%) brightness(105%) contrast(85%) saturate(110%)",

    // Color Enhancement Filters
    vibrant: "saturate(200%) contrast(110%)",
    vivid: "saturate(180%) brightness(105%) contrast(120%)",
    fresh: "saturate(140%) brightness(110%) contrast(105%)",
    crisp: "contrast(130%) brightness(105%)",

    // Mood Filters
    dreamy: "brightness(110%) contrast(90%) saturate(85%) blur(0.5px)",
    moody: "brightness(95%) contrast(115%) saturate(90%)",
    dramatic: "contrast(130%) brightness(90%) saturate(110%)",
    melancholy: "saturate(90%) brightness(95%) contrast(105%) sepia(20%)",

    // Temperature Filters
    arctic: "brightness(105%) saturate(80%) hue-rotate(180deg)",
    desert: "brightness(105%) saturate(120%) hue-rotate(-15deg) sepia(20%)",
    tropical: "brightness(105%) saturate(140%) hue-rotate(5deg)",
    sunset: "brightness(105%) saturate(130%) hue-rotate(-10deg) sepia(30%)",

    // Creative Color Filters
    emerald: "hue-rotate(120deg) saturate(130%)",
    amethyst: "hue-rotate(270deg) saturate(130%)",
    ruby: "hue-rotate(-30deg) saturate(150%)",
    sapphire: "hue-rotate(180deg) saturate(140%)",

    // Artistic Filters
    noir: "grayscale(100%) contrast(120%) brightness(90%)",
    silhouette: "contrast(200%) brightness(50%)",
    highnoon: "brightness(120%) contrast(110%) saturate(110%)",
    midnight: "brightness(80%) contrast(120%) saturate(90%)",

    // Modern Filters
    clarity: "contrast(120%) brightness(102%) saturate(110%)",
    chrome: "grayscale(50%) brightness(105%) contrast(115%)",
    matte: "contrast(90%) brightness(105%) saturate(90%)",
    fade: "brightness(105%) saturate(80%) contrast(90%)",

    // Seasonal Filters
    spring: "brightness(105%) saturate(120%) hue-rotate(5deg)",
    summer: "brightness(110%) saturate(130%) contrast(105%)",
    autumn: "sepia(30%) saturate(110%) brightness(100%)",
    winter: "brightness(105%) saturate(80%) contrast(110%)",

    // Special Effects
    neon: "brightness(110%) contrast(130%) saturate(200%)",
    cosmic: "hue-rotate(180deg) saturate(200%) brightness(110%)",
    cyberpunk: "hue-rotate(-45deg) saturate(200%) contrast(120%)",
    synthwave: "hue-rotate(210deg) saturate(180%) contrast(110%)",

    // Time of Day
    dawn: "brightness(105%) saturate(110%) sepia(20%) hue-rotate(-10deg)",
    dusk: "brightness(95%) saturate(120%) sepia(30%) hue-rotate(-5deg)",
    daylight: "brightness(110%) saturate(110%) contrast(105%)",
    twilight: "brightness(90%) saturate(110%) sepia(20%)",

    // Film Simulation
    kodak: "sepia(20%) saturate(120%) contrast(105%)",
    fuji: "contrast(110%) saturate(115%) brightness(105%)",
    crossProcess: "hue-rotate(-10deg) saturate(140%) contrast(120%)",
    slide: "saturate(130%) contrast(120%) brightness(105%)",

    // Experimental
    glitch: "hue-rotate(360deg) saturate(200%) contrast(150%)",
    psychedelic: "hue-rotate(180deg) saturate(200%) contrast(120%)",
    binary: "contrast(200%) brightness(150%) grayscale(100%)",
    infrared:
      "hue-rotate(180deg) saturate(200%) contrast(120%) brightness(110%)",
  };

  const filterNames = Object.keys(filters);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      setStream(mediaStream);
      setIsCameraStarted(true);
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsCameraStarted(false);
    }
  };

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.filter = filters[selectedFilter];
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL("image/png");
      setCapturedImages((prev) => [
        { url: imageDataUrl, filter: selectedFilter },
        ...prev,
      ]);
    }
  };

  const downloadImage = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `webcam-toy-${Date.now()}.png`;
    link.click();
  };

  const changeFilter = (direction) => {
    const currentIndex = filterNames.indexOf(selectedFilter);
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + filterNames.length) % filterNames.length
        : (currentIndex + 1) % filterNames.length;

    setSelectedFilter(filterNames[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 py-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* Main Camera Section */}
        <div className="relative -mt-60">
          <p className="text-center my-5 font-bold text-purple-600">
            Are You Ready?
          </p>
          {!isCameraStarted ? (
            <button
              onClick={startCamera}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            >
              Start Camera
            </button>
          ) : (
            <div className="relative mt-60">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                  filter: filters[selectedFilter],
                  width: "100%",
                  height: "80vh",
                }}
                className="rounded-lg aspect-video object-cover"
              />
              {/* Overlay for Filter Text */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-lg text-sm font-medium">
                {selectedFilter.charAt(0).toUpperCase() +
                  selectedFilter.slice(1)}{" "}
                Filter
              </div>
              {/* Left and Right Arrows for Filter Controls */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  onClick={() => changeFilter("left")}
                  className="px-4 py-2 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-90 transition flex items-center justify-center"
                  aria-label="Previous filter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  onClick={() => changeFilter("right")}
                  className="px-4 py-2 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-90 transition flex items-center justify-center"
                  aria-label="Next filter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 gap-2">
                <button
                  onClick={captureImage}
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow"
                >
                  Take Photo
                </button>
                <button
                  onClick={stopCamera}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow"
                >
                  Exit Camera
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Gallery Section */}
        {capturedImages.length > 0 && (
          <div className="md:w-1/3 flex flex-col mt-4">
            <div className="text-sm font-medium text-purple-600 mb-2">
              Recent Photos
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 max-h-[calc(100vh-140px)] overflow-y-auto p-2 bg-white bg-opacity-30 rounded-xl">
              {capturedImages.map((img, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden bg-black"
                >
                  <img
                    src={img.url}
                    alt={`Captured ${index + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => downloadImage(img.url)}
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white bg-opacity-90 text-purple-600 text-xs rounded-full font-medium hover:bg-opacity-100"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default WebcamToy;
