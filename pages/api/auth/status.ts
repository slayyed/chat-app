import { getCookies } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { accessToken } = getCookies({ req, res });
    console.log(accessToken);

    res.status(200).json({ accessToken, isActivated: true });
  } catch (e) {
    res.status(401).json({ status: e });
  }
}

export default handler;
