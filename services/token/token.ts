import ms from "ms";
class Token {
  private getExpAtMS(time: string) {
    return Math.floor(Date.now() / 1000 + ms(time) / 1000);
  }
  sign(payload, type) {}
}
