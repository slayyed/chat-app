import prisma from "../../../lib/prisma";
import { ICredentialsId } from "../../../types/Credentials";
import { IToken } from "../../../types/Token";

async function storeRefreshToken(
  refreshToken: IToken,
  credentialsId: ICredentialsId
) {
  return await prisma.token.upsert({
    where: { credentialsId },
    update: {
      refreshToken,
    },
    create: {
      refreshToken,
      credentials: {
        connect: {
          id: credentialsId,
        },
      },
    },
  });
}

export default storeRefreshToken;
