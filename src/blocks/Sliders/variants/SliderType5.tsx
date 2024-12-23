'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

type Slide = {
  src: string
  alt: string
  introContent: string
  buttonLabel: string
}

export const SliderType5 = (props: any) => {
  const media = [
    {
      src: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      alt: 'Slide 1',
      introContent: 'Discover the beauty of nature in Slide 1',
      buttonLabel: 'Explore Slide 1',
    },
    {
      src: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734339288/qz5lppqeapkc39n3w2sr.jpg',
      alt: 'Slide 2',
      introContent: 'Adventure awaits in Slide 2',
      buttonLabel: 'Explore Slide 2',
    },
    {
      src: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734339311/jyqu6pdjps4g88zqlhra.jpg',
      alt: 'Slide 3',
      introContent: 'Experience the thrill in Slide 3',
      buttonLabel: 'Explore Slide 3',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Slide every 3 seconds

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  return (
    <section className="bg-white dark:bg-gray-900 relative">
      <div className="relative w-full overflow-hidden">
        <div className="relative h-56 md:h-96">
          {media.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Intro Content and Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 text-center">
          <p className="text-white bg-black/50 px-4 py-2 rounded-md mb-2">
            {media[currentIndex].introContent}
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            {media[currentIndex].buttonLabel}
          </button>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
