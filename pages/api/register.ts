import type { NextApiRequest, NextApiResponse } from "next";
import HttpError from "../../error-handlers/HttpError";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";
import Credentials from "../../services/credentials/credentials";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { email, password } = req.body;
    // Find an existing account
    const isCandidateExist = !!(await findCredentialsByEmail(email));

    // Throw error if account is finded
    if (isCandidateExist)
      throw new HttpError(400, "User with this username is already reigstered");
    // Register user if account is not finded
    Credentials.create(email, password);
    // Return status of request
    res.status(200).json({ message: "User successfully created" });
  } catch (e) {
    if (e instanceof HttpError) {
      res.status(e.code).send(e.message);
    } else {
      res.status(500).send("Internal server error");
    }
  }
}

export default handler;
