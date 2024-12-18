'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Card = ({ imageUrl, title }) => {
  return (
    <div className="relative rounded overflow-hidden shadow-md">
      <img className="w-full h-80 object-cover" src={imageUrl} alt={title} />
      <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent w-full p-4">
        <p className="text-white font-bold text-lg">{title}</p>
      </div>
    </div>
  );
};

export const StoryType2 = (props: any) => {
  const { introContent, media, reviews } = props;

  const cards = [
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      title: 'Why Choose the USA for Higher Education?',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      title: 'Step-by-Step Guide to Applying for a UK Student Visa',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      title: 'Top 10 Universities in Australia for International Students',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      title: 'Scholarship Opportunities for Students in Canada',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      title: 'Navigating Post-Study Work Permits in Australia',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg',
      title: 'Preparing for IELTS: Tips and Resources',
    },
  ];

  // State to track the current index of the first visible card
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 3 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Wrapper for cards to display multiple cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <Card key={index} imageUrl={card.imageUrl} title={card.title} />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </section>
    </>
  );
};
