import prisma from "../../../lib/prisma";
import { ICredentialsId } from "../../../types/Credentials";

async function findTokenByCredentialsId(id: ICredentialsId) {
  return await prisma.token.findUnique({ where: { id } });
}

export default findTokenByCredentialsId;
