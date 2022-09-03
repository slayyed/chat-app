import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";
import { ICredentialsEmail } from "../../../types/Credentials";

function updateCredentials(
  email: ICredentialsEmail,
  data: Prisma.CredentialsUpdateArgs["data"]
) {
  return prisma.credentials.update({
    where: { email },
    data,
  });
}

export default updateCredentials;
