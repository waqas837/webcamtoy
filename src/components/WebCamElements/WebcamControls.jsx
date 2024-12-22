// app/components/WebcamControls.jsx
"use client";
import React from "react";

const WebcamControls = ({ onStartCamera, onStopCamera, isCameraStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {!isCameraStarted && (
        <p className="text-center my-5 font-bold text-purple-600">
          Are You Ready?
        </p>
      )}
      {!isCameraStarted ? (
        <button
          onClick={onStartCamera}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
        >
          Start Camera
        </button>
      ) : (
        <div className="my-4">
          <button
            onClick={onStopCamera}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow"
          >
            Exit Camera
          </button>
        </div>
      )}
    </div>
  );
};

export default WebcamControls;
