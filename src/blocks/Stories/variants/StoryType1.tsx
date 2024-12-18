/* eslint-disable @next/next/no-img-element */
import React from 'react';

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

export const StoryType1 = (props: any) => {
  const { introContent, media, reviews } = props;
  const cards = [
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg', // Education-related image
      title: 'Why Choose the USA for Higher Education?',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg', // University library
      title: 'Step-by-Step Guide to Applying for a UK Student Visa',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg', // Graduation ceremony
      title: 'Top 10 Universities in Australia for International Students',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg', // Scholarship image
      title: 'Scholarship Opportunities for Students in Canada',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg', // Scholarship image
      title: 'Scholarship Opportunities for Students in Canada',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg', // Scholarship image
      title: 'Scholarship Opportunities for Students in Canada',
    },
  ];

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} title={card.title} />
          ))}
        </div>
      </section>
    </>
  );
};
