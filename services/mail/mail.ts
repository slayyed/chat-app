import * as nodemailer from "nodemailer";
import { ICredentialsEmail } from "../../types/Credentials";
interface MailData {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

class MailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.COMPANY_MAIL_LOGIN,
        pass: process.env.COMPANY_MAIL_PASSWORD,
      },
      secure: true,
    });
  }

  send(to: ICredentialsEmail, mailData: MailData) {
    try {
      this.transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });
    } catch (e) {
      throw Error("Unable to send email");
    }
  }
}

export default new MailService();
