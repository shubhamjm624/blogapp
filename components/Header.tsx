import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl">Welcome to Bloapp</h1>
      <Link href="/writeblog">
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
          Write Blog
        </button>
      </Link>
    </header>
  );
};

export default Header;
