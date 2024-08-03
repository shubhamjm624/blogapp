import { PrismaClient } from '@prisma/client';

declare global {
  // Extending the NodeJS global object with a prisma property
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Check if the prisma instance already exists in the global object
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
