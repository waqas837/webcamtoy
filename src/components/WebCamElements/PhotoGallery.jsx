// app/components/PhotoGallery.jsx
"use client";
import React from "react";

const PhotoGallery = ({ capturedImages, onDownloadImage, onDeleteImage }) => {
  return (
    capturedImages.length > 0 && (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <button
                    onClick={() => onDownloadImage(img.url)}
                    className="px-3 py-1 bg-white bg-opacity-90 text-purple-600 text-xs rounded-full font-medium hover:bg-opacity-100"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => onDeleteImage(index)}
                    className="px-3 py-1 bg-red-500 bg-opacity-90 text-white text-xs rounded-full font-medium hover:bg-opacity-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default PhotoGallery;
