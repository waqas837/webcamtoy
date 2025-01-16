"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import PhotoGallery from "./WebCamElements/PhotoGallery";
import FilterControls from "./WebCamElements/FilterControls";
import WebcamControls from "./WebCamElements/WebcamControls";
import { filters } from "../../lib/filters";
import {
  createSnowParticles,
  createRainParticles,
  createBubbleParticles,
  createUnderwaterParticles,
  createFlareParticles,
  createBokehParticles,
  createEmojiParticles,
  createFlowerParticles,
  createUniqueGeometricGlowParticles,
} from "../../lib/advancedFilters";

const WebcamToy = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [isCameraStarted, setIsCameraStarted] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState("none");
  const effectCanvasRef = useRef(null);
  const effectInstanceRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  const effects = {
    none: null,
    createEmojiParticles,
    snow: createSnowParticles,
    rain: createRainParticles,
    bubbles: createBubbleParticles,
    underwater: createUnderwaterParticles,
    createFlareParticles,
    createFlareParticles,
    createBokehParticles,
    createFlowerParticles,
    createUniqueGeometricGlowParticles,
  };

  const filterNames = Object.keys(filters);

  const animate = useCallback(() => {
    if (!effectCanvasRef.current || !videoRef.current) return;

    const canvas = effectCanvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw video frame
    if (videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Apply CSS filter
    if (selectedFilter !== "none") {
      ctx.filter = filters[selectedFilter];
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = "none";
    }

    // Apply effect if exists
    if (effectInstanceRef.current?.update) {
      effectInstanceRef.current.update();
    }

    timeRef.current += 0.01;
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [selectedFilter]);

  useEffect(() => {
    if (!isCameraStarted || !effectCanvasRef.current || !videoRef.current)
      return;

    const canvas = effectCanvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions only when starting camera or resizing
    canvas.width = videoRef.current.videoWidth || 1280;
    canvas.height = videoRef.current.videoHeight || 720;

    // Cleanup previous effect
    if (effectInstanceRef.current?.cleanup) {
      effectInstanceRef.current.cleanup();
    }

    // Initialize new effect
    if (selectedEffect !== "none" && effects[selectedEffect]) {
      effectInstanceRef.current = effects[selectedEffect](canvas, ctx);
    } else {
      effectInstanceRef.current = null;
    }

    // Start animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (effectInstanceRef.current?.cleanup) {
        effectInstanceRef.current.cleanup();
      }
    };
  }, [isCameraStarted, selectedEffect, animate]);

  const toggleEffect = (effectName) => {
    setSelectedEffect((prev) => (prev === effectName ? "none" : effectName));
  };

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
      context.drawImage(
        effectCanvasRef.current,
        0,
        0,
        canvas.width,
        canvas.height
      );

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

  const deleteImage = (index) => {
    setCapturedImages((prev) => prev.filter((_, i) => i !== index));
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
    <div>
      <div className="max-w-3xl mx-auto px-4">
        <WebcamControls
          onStartCamera={startCamera}
          onStopCamera={stopCamera}
          isCameraStarted={isCameraStarted}
        />

        {isCameraStarted && (
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ display: "none" }}
            />
            <canvas
              ref={effectCanvasRef}
              className="rounded-lg aspect-video object-cover"
              style={{
                width: "100%",
                height: "80vh",
              }}
            />

            <FilterControls
              selectedFilter={selectedFilter}
              onChangeFilter={changeFilter}
            />

            <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
              <button
                onClick={captureImage}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg filter hover:brightness-110 hover:contrast-125"
              >
                📸 Capture
              </button>
              <p className="text-lg font-medium">Effects</p>
              {Object.keys(effects).map(
                (effect) =>
                  effect !== "none" && (
                    <button
                      key={effect}
                      onClick={() => toggleEffect(effect)}
                      className={`px-4 py-2 ${
                        selectedEffect === effect
                          ? "bg-purple-600"
                          : "bg-purple-400"
                      } text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg filter hover:brightness-110 hover:contrast-125`}
                    >
                      {effect === "createEmojiParticles" && "😊"}
                      {effect === "snow" && "❄️"}
                      {effect === "rain" && "🌧️"}
                      {effect === "bubbles" && "🌊"}
                      {effect === "underwater" && "🐠"}
                      {effect === "createFlareParticles" && "✨"}
                      {effect === "createBokehParticles" && "🔵"}
                      {effect === "createFlowerParticles" && "🌼"}
                      {effect === "createUniqueGeometricGlowParticles" && "🌟"}
                      {/* Add more icons for other effects if needed */}
                    </button>
                  )
              )}
            </div>
          </div>
        )}

        <PhotoGallery
          capturedImages={capturedImages}
          onDownloadImage={downloadImage}
          onDeleteImage={deleteImage}
        />

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default WebcamToy;
