"use client";
import React from "react";
import { Camera, CameraOff } from "lucide-react"; // Import Camera icon from lucide-react

const WebcamControls = ({ onStartCamera, onStopCamera, isCameraStarted }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full bg-cover bg-center rounded-xl"
      style={{
        backgroundImage: 'url("/camera-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-6 text-center">
        {!isCameraStarted && (
          <p className="text-2xl font-bold text-pink-500 mb-6">
            Are You Ready to Capture Fun Moments?
          </p>
        )}

        {!isCameraStarted ? (
          <button
            onClick={onStartCamera}
            className="m-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xl font-semibold rounded-full shadow-lg hover:scale-110 transition-all duration-300 ease-in-out transform flex items-center gap-3"
          >
            <Camera className="w-6 h-6" /> {/* Camera Icon */}
            Start Camera
          </button>
        ) : (
          <button
            onClick={onStopCamera}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-red-600 text-white text-sm font-medium rounded-full hover:opacity-80 shadow-xl flex items-center gap-3 hover:scale-110 transition-all duration-300 ease-in-out transform"
          >
            <CameraOff className="w-6 h-6" />
            Exit Camera
          </button>
        )}
      </div>
    </div>
  );
};

export default WebcamControls;
