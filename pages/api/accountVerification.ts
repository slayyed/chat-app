// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsDbInteractions from "../../services/credentials/interactions.prisma";
import bcrypt from "bcryptjs";
type LoginData = {
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    // Find an existing account by token
    // Throw error if account is not finded
    // Compare codes
    // Throw error when code is invalid
    // Return status of request and verification status
    res.status(200).json({ "123": 123 });
  } catch (e) {
    res.status(401).json({ status: e });
  }
}

export default handler;
