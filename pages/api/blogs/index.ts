import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Request received:', req.method);

  if (req.method === 'GET') {
    console.log('Handling GET request to fetch all blogs');

    try {
      console.log('Attempting to fetch blogs from the database');
      const blogs = await prisma.blog.findMany();
      console.log('Blogs fetched successfully:', blogs);

      res.status(200).json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Failed to fetch blogs' });
    }
  } else if (req.method === 'POST') {
    console.log('Handling POST request to create a new blog');
    const { title, content, authorId } = req.body;

    console.log('Request body:', req.body);

    if (!title || !content || !authorId) {
      console.error('Missing required fields:', { title, content, authorId });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      console.log('Attempting to create a new blog');
      const newBlog = await prisma.blog.create({
        data: {
          title,
          content,
          author: { connect: { id: authorId } }, // Connect the blog to the author
        },
      });
      console.log('Blog created successfully:', newBlog);

      res.status(201).json(newBlog);
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ error: 'Failed to create blog' });
    }
  } else {
    console.log('Unsupported method:', req.method);
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
