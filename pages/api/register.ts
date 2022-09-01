// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsOrmLayer from "../../services/credentials/credentials";
import bcrypt from "bcryptjs";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { email, password } = req.body;
    // Find an existing account
    const isCandidateExist = !!findCredentialsByEmail(email);
    // Throw error if account is finded
    if (isCandidateExist)
      throw new Error("User with this username is already reigstered");
    // Register user if account is not finded
    // Return status of request
    res.status(200).json({ "123": 123 });
  } catch (e) {
    res.status(401).json({ status: e });
  }
}

export default handler;
