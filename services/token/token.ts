import { sign, verify } from "jsonwebtoken";
import ms from "ms";
import SECRETS from "../../env.config";
import { TokenORMLayer } from "./token.orm";
import {
  IToken,
  ITokenDecoded,
  ITokenLifeTime,
  ITokenPayload,
  ITokenSecret,
} from "../../types/Token";
import { ICredentialsId } from "../../types/Credentials";
class Token extends TokenORMLayer {
  constructor() {
    super();
  }
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
      SECRETS.ACCESS_LIFETIME,
      SECRETS.ACCESS_SECRET
    );
  }
  storeRefreshTokenInDb(refreshToken: IToken, credentialsId: ICredentialsId) {
    super.createOrUpdate({
      where: { credentialsId },
      update: {
        refreshToken,
      },
      create: {
        refreshToken,
        credentials: {
          connect: {
            id: credentialsId,
          },
        },
      },
    });
  }
  //Create refresh token
  async createRefreshToken(payload: ITokenPayload) {
    const token = this.createToken(
      payload,
      SECRETS.REFRESH_LIFETIME,
      SECRETS.REFRESH_SECRET
    );
    await this.storeRefreshTokenInDb(token.token, 1);
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
