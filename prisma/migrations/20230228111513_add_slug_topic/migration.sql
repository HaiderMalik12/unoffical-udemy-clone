/*
  Warnings:

  - Added the required column `slug` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "slug" TEXT NOT NULL;
