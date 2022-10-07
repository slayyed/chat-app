// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    // Find an existing account by token
    // let accessToken = getCookie("accessToken");
    // let refreshToken = getCookie("refreshToken");
    // if (!accessToken && !refreshToken) {
    //   res.status(401);
    // }

    res.status(200).json({ isActivated: true });
  } catch (e) {
    res.status(401).json({ status: e });
  }
}

export default handler;
