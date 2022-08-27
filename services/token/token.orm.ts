import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
export class TokenORMLayer {
  ormTable;
  // вынести объект в переменную
  constructor() {
    this.ormTable = prisma.token;
  }
  /**
   * Update or create token by query
   */
  async createOrUpdate(args: Prisma.TokenUpsertArgs) {
    return await this.ormTable.upsert(args);
  }

  /**
   * Delete token
   */
  async delete(args: Prisma.TokenDeleteArgs) {
    return await this.ormTable.delete(args);
  }
}
