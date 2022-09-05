export type ICredentialsId = number;
export type ICredentialsEmail = string;
export type ICredentialsPassword = string;
export type ICredentialsPasswordSalt = string;
export type ICredentialsVerificationCode = number;
export type ICredentialsIsActivated = boolean;
export type ICredentialsRoleId = number;

export interface ICredentials {
  id: ICredentialsId;
  email: ICredentialsEmail;
  password: ICredentialsPassword;
  passwordSalt: ICredentialsPasswordSalt;
  verificationCode: ICredentialsVerificationCode;
  isActivated: ICredentialsIsActivated;
  roleId: ICredentialsRoleId;
}
