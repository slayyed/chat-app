import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
class CredentialsOrmLayer {
  /**
   * Update credentials by query
   */
  async update(args: Prisma.CredentialsUpdateArgs) {
    return await prisma.credentials.update(args);
  }
  /**
   * Create credentials row
   */
  async create(args: Prisma.CredentialsCreateArgs) {
    return await prisma.credentials.create(args);
  }
  /**
   * Find credentials
   */
  async findCredentials(args: Prisma.CredentialsFindUniqueOrThrowArgs) {
    return await prisma.credentials.findUniqueOrThrow(args);
  }
  /**
   * Delete credentials
   */
  async deleteCredentials(args: Prisma.CredentialsDeleteArgs) {
    return await prisma.credentials.delete(args);
  }
}

export default new CredentialsOrmLayer();
