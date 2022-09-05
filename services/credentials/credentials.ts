import * as bcrypt from "bcryptjs";
import createCredentials from "../../prisma/queries/credentials/createCredentials";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";
import {
  ICredentialsEmail,
  ICredentialsPassword,
  ICredentialsPasswordSalt,
} from "../../types/Credentials";
class Credentials {
  hashPassword(
    password: ICredentialsPassword,
    salt?: ICredentialsPasswordSalt
  ) {
    if (!salt) salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return { salt, hashedPassword };
  }
  // update()
  // delete()

  //??
  // requestActivation()
  // activateAccount()
}

export default new Credentials();
