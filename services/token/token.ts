import { sign, verify } from "jsonwebtoken";
import ms from "ms";
import {
  IToken,
  ITokenDecoded,
  ITokenLifeTime,
  ITokenPayload,
  ITokenSecret,
} from "../../types/Token";
class Token {
  private getExpAtMS(time: string) {
    return Math.floor(Date.now() / 1000 + ms(time) / 1000);
  }
  private createToken(
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
  //Decode tokens, as usually used for detect wrong token. If token right, it returns a decoded token, else undefined
  decodeAccessToken(token: IToken) {
    return this.decodeToken(token, process.env.ACCESS_SECRET!);
  }
}

export default new Token();
