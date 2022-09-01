import prisma from "../../../lib/prisma";
import { ICredentialsEmail } from "../../../types/Credentials";

async function findCredentialsByEmail(email: ICredentialsEmail) {
  return await prisma.credentials.findUnique({ where: { email } });
}

export default findCredentialsByEmail;
