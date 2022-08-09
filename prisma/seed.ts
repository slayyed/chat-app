import { PrismaClient } from "@prisma/client";
const friendshipStatusesList = [
  "PENDING_FIRST_SECOND",
  "PENDING_SECOND_FIRST",
  "FRIENDS",
  "BLOCK_FIRST_SECOND",
  "BLOCK_SECOND_FIRST",
  "BLOCK_BOTH",
];
const rightsList = [
  "READ_MESSAGES",
  "WRITE_MESSAGES",
  "ADD_FRIENDS",
  "USE_APP",
];
const rolesList = ["USER"];
const prisma = new PrismaClient();
async function main() {
  for (const item of friendshipStatusesList) {
    const user = await prisma.friendshipStatuses.create({
      data: {
        name: item,
      },
    });
  }

  for (const item of rightsList) {
    const rights = await prisma.rights.create({
      data: {
        name: item,
      },
    });
  }
  for (const item of rolesList) {
    const role = await prisma.role.create({
      data: {
        name: item,
      },
    });
  }
  for (const item of rightsList) {
    const roleRights = await prisma.roleRights.create({
      data: {
        role: {
          connect: {
            name: "USER",
          },
        },
        rights: {
          connect: {
            name: item,
          },
        },
      },
    });
  }
  await prisma.credentials.create({
    data: {
      email: "123@mail.ru",
      password: "$2a$10$7.Un2CXdvZf8Mp1sgUV7yugSYGNUsEWGQC6kBHjD15kT27k2NWo8m",
      passwordSalt: "$2a$10$7.Un2CXdvZf8Mp1sgUV7yu",
      role: {
        connect: {
          name: "USER",
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
