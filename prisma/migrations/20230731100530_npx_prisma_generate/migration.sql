/*
  Warnings:

  - You are about to drop the column `testcase` on the `Problem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Problem` DROP COLUMN `testcase`;

-- CreateTable
CREATE TABLE `Test1` (
    `testnum` INTEGER NOT NULL AUTO_INCREMENT,
    `input` VARCHAR(191) NOT NULL,
    `output` VARCHAR(191) NOT NULL,
    `problemId` INTEGER NOT NULL,

    PRIMARY KEY (`testnum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Test1` ADD CONSTRAINT `Test1_problemId_fkey` FOREIGN KEY (`problemId`) REFERENCES `Problem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
