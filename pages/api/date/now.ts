import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({ name: "John Doe" });
}

export default handler;
