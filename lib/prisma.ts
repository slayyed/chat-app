// @ts-nocheck
import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma as PrismaClient;
