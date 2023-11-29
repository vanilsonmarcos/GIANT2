/*
  Warnings:

  - You are about to drop the column `DATA_FIM` on the `apolice` table. All the data in the column will be lost.
  - You are about to drop the column `DATA_INICIO` on the `apolice` table. All the data in the column will be lost.
  - You are about to drop the column `DATA_REMOCAO` on the `apolice` table. All the data in the column will be lost.
  - You are about to drop the column `REMOVIDO_POR` on the `apolice` table. All the data in the column will be lost.
  - You are about to drop the column `SEGURADO_ID` on the `apolice` table. All the data in the column will be lost.
  - You are about to drop the column `VALOR_PREMIO` on the `apolice` table. All the data in the column will be lost.
  - You are about to drop the column `DATA_CRIACAO` on the `apolice_estado` table. All the data in the column will be lost.
  - You are about to drop the column `DATA_CRIACAO` on the `apolice_fracionamento` table. All the data in the column will be lost.
  - You are about to drop the column `VALOR_PAGAR` on the `cobertura` table. All the data in the column will be lost.
  - You are about to drop the column `PESSOA_ID` on the `pessoa_endereco` table. All the data in the column will be lost.
  - You are about to drop the `apolice_cobertura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `apolice_historico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `apolice_item_segurado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `apolice_pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `apolice_tomador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ficheiro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `new_table` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ENDERECO_ID]` on the table `pessoa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `TOMADOR_ID` to the `apolice` table without a default value. This is not possible if the table is not empty.
  - Made the column `NUMERO` on table `apolice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NOME` on table `apolice_estado` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DESCRICAO` on table `apolice_estado` required. This step will fail if there are existing NULL values in that column.
  - Made the column `FRACIONADO_EM` on table `apolice_fracionamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NO_FRACOES` on table `apolice_fracionamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SIGLA` on table `apolice_tipo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NOME` on table `apolice_tipo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DESCRICAO` on table `apolice_tipo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `COBERTURA_BASE` on table `cobertura` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SIGLA` on table `cobertura` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NOME` on table `cobertura` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DESCRICAO` on table `cobertura` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DESCONTO` on table `cobertura` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NOME` on table `pessoa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DATA_NASCIMENTO` on table `pessoa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SEXO` on table `pessoa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NIF` on table `pessoa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ESTADO_CIVIL` on table `pessoa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NOME` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `LOTACAO` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `PREMIO_TRIMESTRAL` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `PREMIO_SEMESTRAL` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `PREMIO_ANUAL` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `PESO_KG` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CILINDRADA_MIN` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CILINDRADA_MAX` on table `preco_cilindrada` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NOME` on table `veiculo_categoria` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `apolice` DROP FOREIGN KEY `FKAPOLICE218101`;

-- DropForeignKey
ALTER TABLE `apolice` DROP FOREIGN KEY `FKAPOLICE395825`;

-- DropForeignKey
ALTER TABLE `apolice` DROP FOREIGN KEY `FKAPOLICE49224`;

-- DropForeignKey
ALTER TABLE `apolice` DROP FOREIGN KEY `FKAPOLICE599017`;

-- DropForeignKey
ALTER TABLE `apolice_cobertura` DROP FOREIGN KEY `FKAPOLICECOBERT`;

-- DropForeignKey
ALTER TABLE `apolice_cobertura` DROP FOREIGN KEY `FKCOBERTCOBERT`;

-- DropForeignKey
ALTER TABLE `apolice_historico` DROP FOREIGN KEY `FKAPOLICE_HI457370`;

-- DropForeignKey
ALTER TABLE `apolice_historico` DROP FOREIGN KEY `FKAPOLICE_HI724695`;

-- DropForeignKey
ALTER TABLE `apolice_historico` DROP FOREIGN KEY `FKAPOLICE_HI851163`;

-- DropForeignKey
ALTER TABLE `apolice_item_segurado` DROP FOREIGN KEY `FKAPOLICE_IT272194`;

-- DropForeignKey
ALTER TABLE `apolice_item_segurado` DROP FOREIGN KEY `FKAPOLICE_IT332390`;

-- DropForeignKey
ALTER TABLE `apolice_item_segurado` DROP FOREIGN KEY `FKAPOLICE_IT332490`;

-- DropForeignKey
ALTER TABLE `apolice_pagamento` DROP FOREIGN KEY `FKAPOLICE_PA210466`;

-- DropForeignKey
ALTER TABLE `apolice_tomador` DROP FOREIGN KEY `FKAPOLICE_TO613390`;

-- DropForeignKey
ALTER TABLE `apolice_tomador` DROP FOREIGN KEY `FKAPOLICE_TO64820`;

-- DropForeignKey
ALTER TABLE `cobertura` DROP FOREIGN KEY `FKAPOLICE_CO255895`;

-- DropForeignKey
ALTER TABLE `pessoa` DROP FOREIGN KEY `FKPESSOA892258`;

-- DropForeignKey
ALTER TABLE `pessoa_endereco` DROP FOREIGN KEY `FKPESSOA_END360638`;

-- DropForeignKey
ALTER TABLE `preco_cilindrada` DROP FOREIGN KEY `FKPRECO_CILI487359`;

-- DropForeignKey
ALTER TABLE `veiculo` DROP FOREIGN KEY `FKVEICULO357677`;

-- AlterTable
ALTER TABLE `apolice` DROP COLUMN `DATA_FIM`,
    DROP COLUMN `DATA_INICIO`,
    DROP COLUMN `DATA_REMOCAO`,
    DROP COLUMN `REMOVIDO_POR`,
    DROP COLUMN `SEGURADO_ID`,
    DROP COLUMN `VALOR_PREMIO`,
    ADD COLUMN `TOMADOR_ID` INTEGER NOT NULL,
    MODIFY `NUMERO` VARCHAR(20) NOT NULL,
    MODIFY `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `DATA_ACTUALIZACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `apolice_estado` DROP COLUMN `DATA_CRIACAO`,
    ADD COLUMN `ACTUALIZADO_POR` INTEGER NULL,
    ADD COLUMN `DATA_INSERCAO` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `INSERIDO_POR` INTEGER NULL,
    ADD COLUMN `REMOVIDO_POR` INTEGER NULL,
    MODIFY `NOME` VARCHAR(100) NOT NULL,
    MODIFY `DESCRICAO` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `apolice_fracionamento` DROP COLUMN `DATA_CRIACAO`,
    ADD COLUMN `DATA_INSERCAO` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `FRACIONADO_EM` VARCHAR(10) NOT NULL,
    MODIFY `NO_FRACOES` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `apolice_tipo` MODIFY `SIGLA` VARCHAR(10) NOT NULL,
    MODIFY `NOME` VARCHAR(100) NOT NULL,
    MODIFY `DESCRICAO` MEDIUMTEXT NOT NULL,
    MODIFY `DATA_CRIACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `cobertura` DROP COLUMN `VALOR_PAGAR`,
    ADD COLUMN `VALOR_A_PAGAR` DECIMAL(13, 2) NOT NULL DEFAULT 0.00,
    MODIFY `APOLICE_TIPO_ID` INTEGER NULL,
    MODIFY `COBERTURA_BASE` BIT(1) NOT NULL DEFAULT b'0',
    MODIFY `SIGLA` VARCHAR(30) NOT NULL,
    MODIFY `NOME` VARCHAR(255) NOT NULL,
    MODIFY `DESCRICAO` LONGTEXT NOT NULL,
    MODIFY `DESCONTO` DECIMAL(13, 2) NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE `pessoa` ADD COLUMN `ENDERECO_ID` INTEGER NULL,
    MODIFY `NOME` VARCHAR(255) NOT NULL,
    MODIFY `DATA_NASCIMENTO` DATE NOT NULL,
    MODIFY `SEXO` VARCHAR(1) NOT NULL,
    MODIFY `NIF` VARCHAR(64) NOT NULL,
    MODIFY `ESTADO_CIVIL` VARCHAR(1) NOT NULL;

-- AlterTable
ALTER TABLE `pessoa_endereco` DROP COLUMN `PESSOA_ID`,
    ADD COLUMN `BAIRRO` VARCHAR(100) NULL,
    ADD COLUMN `CIDADE` VARCHAR(45) NULL,
    ADD COLUMN `PROVINCIA` VARCHAR(45) NULL,
    MODIFY `DATA_CRIACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `pessoa_tipo` MODIFY `DATA_CRIACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `preco_cilindrada` MODIFY `NOME` VARCHAR(255) NOT NULL,
    MODIFY `LOTACAO` INTEGER NOT NULL DEFAULT 0,
    MODIFY `PREMIO_TRIMESTRAL` DECIMAL(13, 2) NOT NULL DEFAULT 0.00,
    MODIFY `PREMIO_SEMESTRAL` DECIMAL(13, 2) NOT NULL DEFAULT 0.00,
    MODIFY `PREMIO_ANUAL` DECIMAL(13, 2) NOT NULL DEFAULT 0.00,
    MODIFY `PESO_KG` INTEGER NOT NULL DEFAULT 0,
    MODIFY `CILINDRADA_MIN` INTEGER NOT NULL,
    MODIFY `CILINDRADA_MAX` INTEGER NOT NULL,
    MODIFY `DATA_CRIACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `veiculo` MODIFY `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `DATA_ACTUALIZACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `DATA_REMOCAO` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `veiculo_categoria` MODIFY `NOME` VARCHAR(255) NOT NULL,
    MODIFY `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `DATA_ACTUALIZACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `DATA_REMOCAO` DATETIME(0) NULL;

-- DropTable
DROP TABLE `apolice_cobertura`;

-- DropTable
DROP TABLE `apolice_historico`;

-- DropTable
DROP TABLE `apolice_item_segurado`;

-- DropTable
DROP TABLE `apolice_pagamento`;

-- DropTable
DROP TABLE `apolice_tomador`;

-- DropTable
DROP TABLE `ficheiro`;

-- DropTable
DROP TABLE `new_table`;

-- CreateTable
CREATE TABLE `adenda` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `APOLICE_ID` INTEGER NULL,
    `NUMERO` VARCHAR(45) NULL,
    `PREMIO` DECIMAL(10, 2) NOT NULL,
    `DATA_INICIO` DATETIME(0) NOT NULL,
    `DATA_FIM` DATETIME(0) NOT NULL,
    `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DATA_ACTUALIZACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `INSERIDO_POR` INTEGER NULL,
    `ACTUALIZADO_POR` INTEGER NULL,

    INDEX `FKADENDAPOLICE_idx`(`APOLICE_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adenda_item_segurado` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `ADENDA_ID` INTEGER NULL,
    `APOLICE_TIPO_ID` INTEGER NULL,
    `ITEM_ID` INTEGER NULL,
    `PREMIO` DECIMAL(10, 2) NULL,
    `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DATA_ACTUALIZACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `INSERIDO_POR` INTEGER NULL,
    `ACTUALIZADO_POR` INTEGER NULL,

    INDEX `FKADENDAAPOLICETIPO_idx`(`APOLICE_TIPO_ID`),
    INDEX `FKADENDAITEMID_idx`(`ITEM_ID`),
    INDEX `FKADENDA_idx`(`ADENDA_ID`),
    UNIQUE INDEX `ADENDAITEM`(`ADENDA_ID`, `ITEM_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adenda_pagamento` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `ADENDA_ID` INTEGER NULL,
    `DESCONTOS` DECIMAL(10, 2) NOT NULL,
    `VALOR_PAGO` DECIMAL(10, 2) NOT NULL,
    `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DATA_ACTUALIZACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DATA_REMOCACAO` DATETIME(0) NULL,
    `INSERIDO_POR` INTEGER NULL,
    `ACTUALIZADO_POR` INTEGER NULL,

    INDEX `FKADENDAPAGA_idx`(`ADENDA_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adenda_segurado` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `SEGURADO_ID` INTEGER NULL,
    `ADENDA_ID` INTEGER NULL,
    `DATA_INSERCAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DATA_ACTUALIZACAO` DATETIME(0) NULL,
    `INSERIDO_POR` INTEGER NULL,
    `ACTUALIZADO_POR` INTEGER NULL,

    INDEX `FRKADENPESS_idx`(`SEGURADO_ID`),
    INDEX `FRKADENDAADENDA_idx`(`ADENDA_ID`),
    UNIQUE INDEX `ADENDASEGURADO`(`SEGURADO_ID`, `ADENDA_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seguradora` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `NIF` VARCHAR(45) NOT NULL,
    `ENDERECO` VARCHAR(200) NOT NULL,
    `EMAIL` VARCHAR(100) NOT NULL,
    `TELEFONE` VARCHAR(45) NOT NULL,
    `TELEFONE_ALT` VARCHAR(45) NOT NULL,
    `WEB_SITE` VARCHAR(150) NOT NULL,
    `DATA_CRIACAO` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DATA_ACTUALIZACAO` DATETIME(0) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `FKAPOLICE395825` ON `apolice`(`TOMADOR_ID`);

-- CreateIndex
CREATE UNIQUE INDEX `ENDERECO_ID_UNIQUE` ON `pessoa`(`ENDERECO_ID`);

-- CreateIndex
CREATE INDEX `FKPESSOAADR_idx` ON `pessoa`(`ENDERECO_ID`);

-- AddForeignKey
ALTER TABLE `apolice` ADD CONSTRAINT `FKAPOLICE218101` FOREIGN KEY (`APOLICE_ESTADO_ID`) REFERENCES `apolice_estado`(`ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `apolice` ADD CONSTRAINT `FKAPOLICE49224` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo`(`ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `apolice` ADD CONSTRAINT `FKAPOLICE599017` FOREIGN KEY (`APOLICE_FRACIONAMENTO_ID`) REFERENCES `apolice_fracionamento`(`ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cobertura` ADD CONSTRAINT `FKAPOLICE_CO255895` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pessoa` ADD CONSTRAINT `FKPESSOA892258` FOREIGN KEY (`PESSOA_TIPO_ID`) REFERENCES `pessoa_tipo`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pessoa` ADD CONSTRAINT `FKPESSOAADR` FOREIGN KEY (`ENDERECO_ID`) REFERENCES `pessoa_endereco`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `preco_cilindrada` ADD CONSTRAINT `FKPRECO_CILI487359` FOREIGN KEY (`VEICULO_CATEGORIA_ID`) REFERENCES `veiculo_categoria`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `veiculo` ADD CONSTRAINT `FKVEICULO357677` FOREIGN KEY (`VEICULO_CATEGORIA_ID`) REFERENCES `veiculo_categoria`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda` ADD CONSTRAINT `FKADENDAPOLICE` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda_item_segurado` ADD CONSTRAINT `FKADENDAITEMSEG` FOREIGN KEY (`ADENDA_ID`) REFERENCES `adenda`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda_item_segurado` ADD CONSTRAINT `FKADENDAAPOLICETIPO` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda_item_segurado` ADD CONSTRAINT `FKADENDAITEMID` FOREIGN KEY (`ITEM_ID`) REFERENCES `veiculo`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda_pagamento` ADD CONSTRAINT `FKADENDAPAG` FOREIGN KEY (`ADENDA_ID`) REFERENCES `adenda`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda_segurado` ADD CONSTRAINT `FRKADENADEN` FOREIGN KEY (`ADENDA_ID`) REFERENCES `adenda`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adenda_segurado` ADD CONSTRAINT `FRKADENPESS` FOREIGN KEY (`SEGURADO_ID`) REFERENCES `pessoa`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;
