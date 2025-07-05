import { PrismaClient } from '@prisma/client';

/**
 * Global type assertion for Prisma client instance
 * @type {{ prisma: PrismaClient }}
 */
const globalForPrisma: { prisma: PrismaClient } = global as unknown as { prisma: PrismaClient };

/**
 * Prisma client instance with query logging enabled
 * Uses existing instance if available in development, creates new instance otherwise
 * @type {PrismaClient}
 */
export const prisma: PrismaClient =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

// Store prisma instance in global scope during development
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
