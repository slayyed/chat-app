import * as bcrypt from "bcryptjs";
import createCredentials from "../../prisma/queries/credentials/createCredentials";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";
import _ from "lodash";

import {
  ICredentialsEmail,
  ICredentialsPassword,
  ICredentialsPasswordSalt,
} from "../../types/Credentials";
import MailService from "../mail/mail";
import updateCredentials from "../../prisma/queries/credentials/updateCredentials";
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
  async generateAndSendVerificationCode(to: ICredentialsEmail) {
    const code = _.random(100000, 999999);
    await updateCredentials(to, { verificationCode: code });
    MailService.send(to, {
      from: "Chat",
      to,
      subject: "Hello. There is your verification code",
      text: "That was easy!",
      html: `<b>Hey there! </b><br> ${code} <br/>`,
    });
    // await this.update({ email }, { verificationCode: code });
  }
  // requestActivation()
  // activateAccount()
}

export default new Credentials();
