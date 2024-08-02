
import React from 'react';

const Pagination: React.FC = () => {
  const totalPages = 10;
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
