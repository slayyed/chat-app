// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsOrmLayer from "../../services/credentials/credentials";
import bcrypt from "bcryptjs";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";
import HttpError from "../../error-handlers/HttpError";
import Credentials from "../../services/credentials/credentials";
import Token from "../../services/token/token";
import { setCookie } from "cookies-next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { email, password } = req.body;
    // Find an existing account
    const candidateAccount = await findCredentialsByEmail(email);

    // Throw error if account is not finded
    if (!candidateAccount)
      throw new HttpError(400, "Invalid email or password");
    // Hash password to compare with original
    const { hashedPassword } = Credentials.hashPassword(
      password,
      candidateAccount.passwordSalt
    );
    // Throws error when password is not right
    if (hashedPassword !== candidateAccount.password)
      throw new HttpError(400, "Invalid email or password");

    const accessToken = await Token.createAccessToken({
      id: candidateAccount.id,
      email: candidateAccount.email,
    });
    setCookie("accessToken", accessToken.token, {
      req,
      res,
      expires: new Date(accessToken.maxAge),
    });

    await Credentials.generateAndSendVerificationCode(candidateAccount.email);

    // Return status of request
    res.status(200).json({ candidateAccount });
  } catch (e) {
    if (e instanceof HttpError) {
      res.status(e.code).json({ message: e.message });
    } else {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

export default handler;
