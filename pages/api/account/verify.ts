// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Credentials from "../../../services/credentials/credentials";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { code } = req.body;
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
