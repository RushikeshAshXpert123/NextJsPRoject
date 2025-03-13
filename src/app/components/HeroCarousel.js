'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  // List your public folder images here (ensure these files exist in /public)
  const images = ['/imgs/bgtour.jpg', '/imgs/bgtour2.jpg', '/imgs/taj.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-96">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 opacity-75"></div>
      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
          Discover India's Hidden Gems
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl">
          Experience the beauty, culture, and adventure
        </p>
      </div>
      {/* Animated Scroll Arrow */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
}
