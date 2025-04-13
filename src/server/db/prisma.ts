import { PrismaClient } from '@prisma/client';
import { serverConfig } from '../config/config';

// Prevent multiple instances of Prisma Client in development
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (serverConfig.nodeEnv === 'development') {
  global.prisma = prisma;
}

// Handle graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});