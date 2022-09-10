/*
  Warnings:

  - A unique constraint covering the columns `[credentialsId]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Token_credentialsId_key` ON `Token`(`credentialsId`);
