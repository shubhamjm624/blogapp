import React from 'react';

const WholeBlog: React.FC = () => {

    const title = "Understanding React and Next.js";
    const content = `React is a JavaScript library for building user interfaces.
    Next.js is a React framework that enables functionality such as server-side rendering and static site generation.

    Both of these tools are essential for modern web development, providing powerful capabilities and improving developer experience.`;


  return (
    <div className="max-w-2xl mx-auto rounded overflow-hidden shadow-lg p-6 bg-white my-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="text-gray-700 text-base">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default WholeBlog;

