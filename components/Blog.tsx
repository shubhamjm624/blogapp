import React from 'react';
import Link from 'next/link';

interface BlogProps {
  title: string;
  intro: string;
  blogId: string;
}

const Blog: React.FC<BlogProps> = ({ title, intro, blogId }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-base mb-4">{intro}</p>
      <Link href={`/blog`} className="text-blue-500 hover:text-blue-700">
        Read more...
      </Link>
    </div>
  );
};

export default Blog;
