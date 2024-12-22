// app/components/WebcamToy.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
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
} from "../../lib/advancedFilters";

const WebcamToy = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [isCameraStarted, setIsCameraStarted] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState("none");
  const [animationFrame, setAnimationFrame] = useState(null);
  const effectCanvasRef = useRef(null);
  const timeRef = useRef(0);

  const effects = {
    none: null,
    createEmojiParticles: createEmojiParticles,
    snow: createSnowParticles,
    rain: createRainParticles,
    bubbles: createBubbleParticles,
    underwater: createUnderwaterParticles,
    createFlareParticles: createFlareParticles,
    createBokehParticles: createBokehParticles,
  };

  const filterNames = Object.keys(filters);

  useEffect(() => {
    if (isCameraStarted && effectCanvasRef.current && videoRef.current) {
      const canvas = effectCanvasRef.current;
      const ctx = canvas.getContext("2d");
      let effect = null;

      canvas.width = videoRef.current.videoWidth || 1280;
      canvas.height = videoRef.current.videoHeight || 720;

      if (selectedEffect !== "none" && effects[selectedEffect]) {
        if (
          [
            "createEmojiParticles",
            "snow",
            "rain",
            "bubbles",
            "underwater",
            "createFlareParticles",
            "createBokehParticles",
          ].includes(selectedEffect)
        ) {
          effect = effects[selectedEffect](canvas, ctx);
        }
      }

      const animate = () => {
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

        // Apply advanced effect
        if (selectedEffect !== "none") {
          if (
            [
              "createEmojiParticles",
              "snow",
              "rain",
              "bubbles",
              "underwater",
              "createFlareParticles",
              "createBokehParticles",
            ].includes(selectedEffect) &&
            effect
          ) {
            effect.update();
          } else if (effects[selectedEffect]) {
            effects[selectedEffect](
              ctx,
              canvas.width,
              canvas.height,
              timeRef.current
            );
          }
        }

        timeRef.current += 0.01;
        const frameId = requestAnimationFrame(animate);
        setAnimationFrame(frameId);
      };

      animate();

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isCameraStarted, selectedEffect, selectedFilter]);

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
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 py-4 flex items-center justify-center">
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

            <div className="flex items-center justify-between mt-3 gap-2">
              <button
                onClick={captureImage}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow"
              >
                📸 Capture
              </button>
              <p>Effects</p>
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
                      } text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow`}
                    >
                      {effect === "createEmojiParticles" && "😊"}
                      {effect === "snow" && "❄️"}
                      {effect === "rain" && "🌧️"}
                      {effect === "bubbles" && "🌊"}
                      {effect === "underwater" && "🐠"}
                      {effect === "createFlareParticles" && "✨"}
                      {effect === "createBokehParticles" && "🔵"}
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
