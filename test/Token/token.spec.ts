import { describe, test, expect } from "@jest/globals";
import SECRETS from "../../env.config";
import Token from "../../services/token/token";

describe("Token", function () {
  test("Create token method", function () {
    expect(
      Token.createToken(
        { id: 1, email: "test@test.ru" },
        SECRETS.ACCESS_LIFETIME,
        SECRETS.ACCESS_SECRET
      )
    ).toBeTruthy();
  });
  test("Create access token method", function () {
    expect(
      Token.createAccessToken({ id: 1, email: "test@test.ru" })
    ).toBeTruthy();
  });

  test("Create refresh token method", function () {
    expect(
      Token.createRefreshToken({ id: 1, email: "test@test.ru" })
    ).toBeTruthy();
  });

  test("Is token decode method works correctly", () => {
    // If token right and not expired it will be decoded.
    const secret = "test";
    const wrongSecret = "joke";
    const { token } = Token.createToken({ id: 1, email: "123" }, "1d", secret);
    expect(Token.decodeToken(token, secret)).toBeDefined();
    // Else it will return undefined
    expect(Token.decodeToken(token, wrongSecret)).toBeUndefined();
  });

  // test("Is refresh token storing in db", async () => {
  //   await Token.createRefreshToken({ id: 1, email: "test@mail.ru" });
  // });
});
