export default class HttpError extends Error {
  constructor(public code: number, message: string) {
    super(message);
    this.name = "HttpError";
    this.code = code;
  }
}
