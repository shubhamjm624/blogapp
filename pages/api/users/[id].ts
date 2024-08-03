import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing ID parameter' });
  }

  try {
    if (req.method === 'GET') {
      // Get a specific user by ID
      const user = await prisma.user.findUnique({
        where: { id: id },
        include: { blogs: true }, // Include related blogs
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(user);
    } else if (req.method === 'PUT') {
      // Update a specific user by ID
      const { email, name, role } = req.body;

      const updatedUser = await prisma.user.update({
        where: { id: id },
        data: {
          email,
          name,
          role,
        },
      });

      res.status(200).json(updatedUser);
    } else if (req.method === 'DELETE') {
      // Delete a specific user by ID
      await prisma.user.delete({
        where: { id: id },
      });

      res.status(204).end(); // No content response
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling user request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
