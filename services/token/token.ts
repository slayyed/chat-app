import { sign, verify } from "jsonwebtoken";
import ms from "ms";
import {
  IToken,
  ITokenDecoded,
  ITokenLifeTime,
  ITokenPayload,
  ITokenSecret,
} from "../../types/Token";
import { ICredentialsId } from "../../types/Credentials";
import storeRefreshToken from "../../prisma/queries/token/storeRefreshToken";
class Token {
  private getExpAtMS(time: string) {
    return Math.floor(Date.now() / 1000 + ms(time) / 1000);
  }
  createToken(
    payload: ITokenPayload,
    lifeTime: ITokenLifeTime,
    secret: ITokenSecret
  ) {
    const exp = this.getExpAtMS(lifeTime);
    //// Get payload and sign it with sign method
    const token = sign({ ...payload, exp }, secret);
    //// Return maxAge in ms
    return { token, maxAge: exp * 1000 };
  }

  //Create access token
  createAccessToken(payload: ITokenPayload) {
    return this.createToken(
      payload,
      process.env.ACCESS_LIFETIME!,
      process.env.ACCESS_SECRET!
    );
  }

  //Create refresh token
  async createRefreshToken(payload: ITokenPayload) {
    const token = this.createToken(
      payload,
      process.env.REFRESH_LIFETIME!,
      process.env.REFRESH_SECRET!
    );
    await storeRefreshToken(token.token, 1);
    return token;
  }

  //Create token pair

  async createTokenPair(payload: ITokenPayload) {
    const accessToken = this.createAccessToken(payload);
    const refreshToken = await this.createRefreshToken(payload);
    return { accessToken, refreshToken };
  }
  //Decode token
  decodeToken(
    token: IToken,
    secret: ITokenSecret,
    callback = (err: any, decoded: any) => {
      if (err) return;
      return decoded as ITokenDecoded;
    }
  ): ITokenDecoded | undefined {
    return verify(token, secret, callback) as ITokenDecoded | undefined;
  }
  //Verify token

  //Destroy active refresh token
  // destroyRefresh() {
  //   super.delete();
  // }
  // Only one session is being active
}

export default new Token();
