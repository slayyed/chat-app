import { ICredentialsEmail, ICredentialsId } from "./Credentials";
export type IToken = string;
export type ITokenSecret = string;
export type ITokenLifeTime = string;

export interface ITokenPayload {
  id: ICredentialsId;
  email: ICredentialsEmail;
}

export interface ITokenDecoded {
  id: ICredentialsId;
  email: ICredentialsEmail;
  exp: number;
  iat: number;
}
