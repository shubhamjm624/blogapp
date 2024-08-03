
import React from 'react';

// Define the Blog type
type Blog = {
  _id: string;
  title: string;
  content: string;
};

// Sample blog objects
const bloggData: Blog[] = [
  {
    _id: '66a7b823c9e3e3fdfd399b2c',
    title: 'Advanced Tailwind CSS Techniques',
    content: 'Tailwind CSS provides utility-first CSS...',
  },
  {
    _id: '66a7b822c9e3e3fdfd399b29',
    title: 'Understanding Next.js',
    content: 'Next.js is a React framework for production...',
  },
  {
    _id: '66a7b822c9e3e3fdfd399b2b',
    title: 'Getting Started with Prisma',
    content: 'Prisma is an ORM that makes it easy to work with databases...',
  },
  {
    _id: '66a7b822c9e3e3fdfd399b2a',
    title: 'GraphQL Integration with Next.js',
    content: 'Integrating GraphQL with Next.js can improve data fetching..',
  }
];


const Pagination: React.FC = () => {
  const totalPages = (bloggData.length)/4;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center space-x-2 mt-4">
      <button className="px-3 py-1 bg-gray-200 rounded">Back</button>
      <div className="flex space-x-1">
        {pages.map((page) => (
          <button key={page} className="px-3 py-1 bg-gray-200 rounded">
            {page}
          </button>
        ))}
      </div>
      <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
    </div>
  );
};

export default Pagination;
