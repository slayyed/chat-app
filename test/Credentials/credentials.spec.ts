import { describe, test, expect } from "@jest/globals";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";
import createCredentials from "../../prisma/queries/credentials/createCredentials";
import findCredentialsByEmail from "../../prisma/queries/credentials/findCredentialsByEmail";

describe("Credentials", function () {
  test("Is credentials stored", async () => {
    const email = `${uuidv4()}@mail.ru`;
    const creds = await createCredentials(email, "123", "salt");
    const storedCreds = await findCredentialsByEmail(email);
    expect(storedCreds).toMatchObject(creds);
  });
});
