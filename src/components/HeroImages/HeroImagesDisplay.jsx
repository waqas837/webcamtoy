"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroImagesDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const images = [
        { src: "/1.jpg", alt: "Gallery Image 1" },
        { src: "/2.jpg", alt: "Gallery Image 2" },
        { src: "/3.jpg", alt: "Gallery Image 3" },
        { src: "/4.jpg", alt: "Gallery Image 4" },
    ];

    const goToNext = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    }, [isAnimating, images.length]);

    const goToPrev = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    }, [isAnimating, images.length]);

    useEffect(() => {
        const timer = setInterval(goToNext, 5000);
        return () => clearInterval(timer);
    }, [goToNext]);

    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <h3 className="text-2xl font-semibold text-purple-700 mb-8 text-center">
                Filters & Effects
            </h3>

            <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                {/* Main Stage */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    {/* Current Image */}
                    <div className="absolute inset-0 transform transition-transform duration-700 ease-out">
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Animated Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-fade-in-slide-up text-center">
                            <h2 className="text-[50px] md:text-[100px] font-bold text-white tracking-wider shadow-text animate-pulse">
                                BEST FILTERS
                            </h2>
                            <div className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 shadow-text animate-pulse">
                                2025
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-8 h-8 text-purple-800" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-8 h-8 text-purple-800" />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (!isAnimating && index !== currentIndex) {
                                    setIsAnimating(true);
                                    setCurrentIndex(index);
                                    setTimeout(() => setIsAnimating(false), 500);
                                }
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            <h4 className="text-center mt-8 text-gray-600">40+ Premium Filters Available</h4>
        </div>
    );
};

export default HeroImagesDisplay;