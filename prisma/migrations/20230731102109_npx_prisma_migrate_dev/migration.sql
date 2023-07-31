/*
  Warnings:

  - You are about to drop the `Test1` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `testcase` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Test1` DROP FOREIGN KEY `Test1_problemId_fkey`;

-- AlterTable
ALTER TABLE `Problem` ADD COLUMN `testcase` JSON NOT NULL;

-- DropTable
DROP TABLE `Test1`;
