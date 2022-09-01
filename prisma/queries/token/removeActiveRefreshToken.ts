import prisma from "../../../lib/prisma";
import { ICredentialsId } from "../../../types/Credentials";

async function removeActiveRefreshToken(credentialsId: ICredentialsId) {
  await prisma.token.delete({ where: { credentialsId } });
}

export default removeActiveRefreshToken;
