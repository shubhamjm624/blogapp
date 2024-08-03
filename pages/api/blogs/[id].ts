import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    if (req.method === 'GET') {
      // Get a specific blog by ID
      const blog = await prisma.blog.findUnique({
        where: { id: id },
        include: { author: true },
      });

      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      res.status(200).json(blog);
    } else if (req.method === 'PUT') {
      // Update a specific blog by ID
      const { title, content, published } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const updatedBlog = await prisma.blog.update({
        where: { id: id },
        data: {
          title,
          content,
          published: published ?? false,
        },
      });

      res.status(200).json(updatedBlog);
    } else if (req.method === 'DELETE') {
      // Delete a specific blog by ID
      await prisma.blog.delete({
        where: { id: id },
      });

      res.status(204).end();
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
