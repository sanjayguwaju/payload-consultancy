'use client'

import React, { useState, useEffect } from 'react'

export const SliderType3 = (props: any) => {
  const { introContent, media } = props

  // Carousel image sources
  const images = [
    'https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Slide every 5 seconds

    return () => clearInterval(interval) // Cleanup
  }, [currentIndex])

  return (
    <div className="relative h-[600px] px-2 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-5xl text-blue-600 md:text-6xl font-bold mb-6">
          Swot Consultancy
          <br />
          <span className="text-blue-400">Services</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-black">
          Join us in our mission to create sustainable change and improve lives across Nepal through
          education, healthcare, and community development.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-yellow-600 text-blue-900 px-8 py-3 rounded-md font-bold hover:bg-yellow-500 transition">
            Contact Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute hidden top-1/2 left-4 z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/30 text-white rounded-full hover:bg-white/50 transition"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden top-1/2 right-4 z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/30 text-white rounded-full hover:bg-white/50 transition"
      >
        &#9654;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
