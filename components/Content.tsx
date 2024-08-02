
import React from 'react';
import Blogs from './Blogs';
import Pagination from './Pagination';

const Content: React.FC = () => {
  return (
    <div className="p-4">
      <Blogs />
      <Pagination />
    </div>
  );
};

export default Content;
