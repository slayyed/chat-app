// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsOrmLayer from "../../services/credentials/credentials.orm";
import bcrypt from "bcryptjs";
type LoginData = {
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    // Find a row with this credentials
    const loginData = await CredentialsOrmLayer.findCredentials({
      where: {
        email: req.body.email as LoginData["email"],
      },
    });
    // Hash password which comes from password field
    const cryptedPass = bcrypt.hashSync(
      req.body.password,
      loginData.passwordSalt
    );
    //Compare two passwords
    if (cryptedPass !== loginData.password)
      res.status(401).json({ message: "Invalid email or password" });

    //Generate access and refresh token (Store refresh token in db)
    //Set cookie with token
    //Send verification code via email if account is not verified
    //Return user credentials without private fields
    res.status(200).json(loginData);
  } catch (e) {
    res.status(401).json({ status: e });
  }
}

export default handler;
