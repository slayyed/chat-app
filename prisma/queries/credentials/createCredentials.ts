import prisma from "../../../lib/prisma";
import {
  ICredentialsEmail,
  ICredentialsPassword,
  ICredentialsPasswordSalt,
} from "../../../types/Credentials";

function createCredentials(
  email: ICredentialsEmail,
  password: ICredentialsPassword,
  passwordSalt: ICredentialsPasswordSalt
) {
  return prisma.credentials.create({
    data: {
      email,
      password,
      passwordSalt,
    },
  });
}

export default createCredentials;
