/*
  Warnings:

  - Made the column `MATRICULA` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `MARCA` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `MODELO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ANO_AQUISICAO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CAPITAL_AQUISICAO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `PESO_BRUTO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `N_LOTACAO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ANO_FABRICO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CILINDRADA` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `REF_CHASSI` on table `veiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DESCRICAO` on table `veiculo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `veiculo` MODIFY `MATRICULA` VARCHAR(24) NOT NULL,
    MODIFY `MARCA` VARCHAR(255) NOT NULL,
    MODIFY `MODELO` VARCHAR(255) NOT NULL,
    MODIFY `ANO_AQUISICAO` INTEGER NOT NULL,
    MODIFY `CAPITAL_AQUISICAO` DECIMAL(13, 2) NOT NULL,
    MODIFY `PESO_BRUTO` INTEGER NOT NULL,
    MODIFY `N_LOTACAO` INTEGER NOT NULL,
    MODIFY `ANO_FABRICO` INTEGER NOT NULL,
    MODIFY `CILINDRADA` INTEGER NOT NULL,
    MODIFY `REF_CHASSI` VARCHAR(64) NOT NULL,
    MODIFY `DESCRICAO` VARCHAR(4000) NOT NULL;
