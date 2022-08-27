import ENVSECRETS from "./secure";

interface IENVVars {
  REFRESH_SECRET: string;
  ACCESS_SECRET: string;
  REFRESH_LIFETIME: string;
  ACCESS_LIFETIME: string;
  COMPANY_MAIL_LOGIN: string;
  COMPANY_MAIL_PASSWORD: string;
}

export default (function () {
  const env = process.env.NODE_ENV;
  if (env == "development" || env == "test") {
    return { ...ENVSECRETS };
  } else if (env == "production") {
    return { ...process.env };
  }
})() as IENVVars;
