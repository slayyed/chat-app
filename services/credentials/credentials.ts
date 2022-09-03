import * as bcrypt from "bcryptjs";
import createCredentials from "../../prisma/queries/credentials/createCredentials";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";
import {
  ICredentialsEmail,
  ICredentialsPassword,
} from "../../types/Credentials";
class Credentials {
  async create(email: ICredentialsEmail, password: ICredentialsPassword) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return await createCredentials(email, hashedPassword, salt);
  }
  // update()
  // delete()

  //??
  // requestActivation()
  // activateAccount()
}

export default new Credentials();
