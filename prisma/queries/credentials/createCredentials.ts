import prisma from "../../../lib/prisma";
import {
  ICredentialsEmail,
  ICredentialsPassword,
} from "../../../types/Credentials";

function createCredentials(
  email: ICredentialsEmail,
  password: ICredentialsPassword
) {
  const passwordSalt = "qwe";

  return prisma.credentials.create({
    data: {
      email,
      password,
      passwordSalt,
    },
  });
}

export default createCredentials;
