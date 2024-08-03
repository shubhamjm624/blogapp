"use client";

import React, { useState, useEffect } from 'react';
import Blog from './Blog';

// Define the Blog type
type Blog = {
  _id: string;
  title: string;
  content: string;
  author: { // Including author details as per your Prisma schema
    id: string;
    email: string;
    name: string;
  };
};

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    
    const fetchBlogs = async () => {
      try {
        console.log('Starting fetchBlogs function');
    
        // Log before making the fetch request
        console.log('Fetching blogs from /api/blogs');
    
        const response = await fetch(`/api/blogs`, {
          method: "GET",
        });
    
        // Log the response status
        console.log('Response status:', response.status);
    
        if (!response.ok) {
          console.error('Fetch response not OK:', response);
          throw new Error('Failed to fetch blogs');
        }
    
        // Log that the response is OK and we are about to parse JSON
        console.log('Fetch response OK, parsing JSON');
    
        const data: Blog[] = await response.json();
    
        // Log the fetched data
        console.log('Fetched data:', data);
    
        // Set the blog data state
        setBlogData(data);
    
        console.log('Blog data state updated');
      } catch (error) {
        // Log any errors that occur during the fetch or parsing
        console.error('Error fetching blogs:', error);
      }
    };
    

    fetchBlogs();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData.map((blog) => (
        <Blog 
          key={blog._id}
          title={blog.title}
          intro={blog.content.slice(0, 100)} // Display the first 100 characters as an intro
          blogId={blog._id}
        />
      ))}
    </div>
  );
};

export default Blogs;
