/*
  Warnings:

  - Added the required column `difficultyLevel` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxTimeLimit` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "difficultyLevel" INTEGER NOT NULL,
ADD COLUMN     "maxTimeLimit" INTEGER NOT NULL;
