// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsOrmLayer from "../../services/credentials/credentials";
import bcrypt from "bcryptjs";
type LoginData = {
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    // Find an existing account
    // Throw error if account is finded
    // Register user if account is not finded
    // Return status of request
    res.status(200).json({ "123": 123 });
  } catch (e) {
    res.status(401).json({ status: e });
  }
}

export default handler;
