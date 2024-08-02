"use client"

import React, { useState, useEffect } from 'react';
import Blog from './Blog';

const Blogs: React.FC = () => {

  const [blogData, setBlogData] = useState([]); 

  useEffect(() => {
    const fetchBlogs = async () => {
        try {
          const response = fetch('/api/blogs');
          const data = await response.json();
          setBlogData(data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData.map((blog, index) => (
        <Blog 
          key={index}
          title={blog.title}
          intro={blog.intro}
          blogId={blog.blogId}
        />
      ))}
    </div>
  );
};

export default Blogs;
