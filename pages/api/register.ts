import type { NextApiRequest, NextApiResponse } from "next";
import HttpError from "../../error-handlers/HttpError";
import createCredentials from "../../prisma/queries/credentials/createCredentials";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";
import Credentials from "../../services/credentials/credentials";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { email, password } = req.body;
    // Find an existing account
    const isCandidateExist = !!(await findCredentialsByEmail(email));

    // Throw error if account is finded
    if (isCandidateExist)
      res.status(400).json({ message: "User already exists" });

    // Hash password
    const { salt, hashedPassword } = Credentials.hashPassword(password);

    // Register user if account is not finded
    await createCredentials(email, hashedPassword, salt);

    // Return status of request
    res.status(200).json({ message: "User successfully created" });
  } catch (e) {
    res.status(500).send({ message: "Internal server error" });
  }
}

export default handler;
