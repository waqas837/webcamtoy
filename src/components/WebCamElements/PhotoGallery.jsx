"use client";
import React from "react";
import { Trash2, Download } from "lucide-react";

const PhotoGallery = ({ capturedImages, onDeleteImage, photoGalleryRef }) => {
  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image.url;
    link.download = `photo_${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {capturedImages.length > 0 && (
        <div className="w-full md:w-1/3 flex flex-col mt-4">
          <h2 className="text-sm font-medium text-purple-600 mb-2">
            Recent Photos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2 max-h-[calc(100vh-140px)] p-2 bg-white bg-opacity-30 rounded-xl overflow-y-auto">
            {capturedImages.map((img, index) => (
              <div
                ref={photoGalleryRef}
                key={index}
                className="relative rounded-lg bg-black overflow-hidden group"
              >
                <img
                  src={img.url}
                  alt={`Captured ${index + 1}`}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end p-3 gap-2">
                  <button
                    onClick={() => handleDownload(img)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
                  >
                    <Download size={16} /> Download
                  </button>
                  <button
                    onClick={() => onDeleteImage(index)}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-full font-medium hover:bg-red-500 transition-colors"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
