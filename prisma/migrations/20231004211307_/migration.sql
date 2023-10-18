/*
  Warnings:

  - You are about to alter the column `EXT` on the `ficheiro` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(5)`.

*/
-- AlterTable
ALTER TABLE `ficheiro` MODIFY `PATH` VARCHAR(500) NULL,
    MODIFY `EXT` VARCHAR(5) NOT NULL,
    MODIFY `CONTENT` LONGTEXT NULL;
