CREATE DATABASE  IF NOT EXISTS `giant_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `giant_db`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: giant_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apolice`
--

DROP TABLE IF EXISTS `apolice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_TIPO_ID` int NOT NULL,
  `NUMERO` varchar(64) DEFAULT NULL,
  `SEGURADO_ID` int NOT NULL,
  `DATA_INICIO` date DEFAULT NULL,
  `DATA_FIM` date DEFAULT NULL,
  `APOLICE_FRACIONAMENTO_ID` int NOT NULL,
  `APOLICE_ESTADO_ID` int NOT NULL,
  `VALOR_PREMIO` decimal(13,2) DEFAULT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT NULL,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICE49224` (`APOLICE_TIPO_ID`),
  KEY `FKAPOLICE395825` (`SEGURADO_ID`),
  KEY `FKAPOLICE218101` (`APOLICE_ESTADO_ID`),
  KEY `FKAPOLICE599017` (`APOLICE_FRACIONAMENTO_ID`),
  CONSTRAINT `FKAPOLICE218101` FOREIGN KEY (`APOLICE_ESTADO_ID`) REFERENCES `apolice_estado` (`ID`),
  CONSTRAINT `FKAPOLICE395825` FOREIGN KEY (`SEGURADO_ID`) REFERENCES `pessoa` (`ID`),
  CONSTRAINT `FKAPOLICE49224` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`),
  CONSTRAINT `FKAPOLICE599017` FOREIGN KEY (`APOLICE_FRACIONAMENTO_ID`) REFERENCES `apolice_fracionamento` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice`
--

LOCK TABLES `apolice` WRITE;
/*!40000 ALTER TABLE `apolice` DISABLE KEYS */;
/*!40000 ALTER TABLE `apolice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_cobertura`
--

DROP TABLE IF EXISTS `apolice_cobertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_cobertura` (
  `ID` int NOT NULL,
  `APOLICE_ID` int DEFAULT NULL,
  `COBERTURA_ID` int DEFAULT NULL,
  `VALOR_PAGO` decimal(13,2) DEFAULT NULL,
  `DESCONTO_EFEC` decimal(13,2) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICECOBERT_idx` (`APOLICE_ID`),
  KEY `FKCOBERTCOBERT_idx` (`COBERTURA_ID`),
  CONSTRAINT `FKAPOLICECOBERT` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice` (`ID`),
  CONSTRAINT `FKCOBERTCOBERT` FOREIGN KEY (`COBERTURA_ID`) REFERENCES `cobertura` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_cobertura`
--

LOCK TABLES `apolice_cobertura` WRITE;
/*!40000 ALTER TABLE `apolice_cobertura` DISABLE KEYS */;
/*!40000 ALTER TABLE `apolice_cobertura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_estado`
--

DROP TABLE IF EXISTS `apolice_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_estado` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_estado`
--

LOCK TABLES `apolice_estado` WRITE;
/*!40000 ALTER TABLE `apolice_estado` DISABLE KEYS */;
INSERT INTO `apolice_estado` VALUES (1,'Em Processamento','A Apolice está em processamento; é um estado temporaio em que a se encontra','2023-08-14 10:16:11','2023-08-14 11:16:11'),(2,'Suspensa','A apolice está suspensa','2023-08-14 10:16:11','2023-08-15 12:11:29'),(3,'Cancelada','A apólice está cancelada','2023-08-14 10:16:11','2023-08-14 11:16:11'),(4,'Expirada','A apólice passou a data de renovação','2023-08-14 10:16:11','2023-08-14 11:16:11'),(5,'Activa','A apólice está valida durante o tempo em que é visualizada','2023-08-14 10:16:11','2023-08-14 11:17:10'),(6,'Em Simulação','A apolice ainda está em estado de simulação','2023-08-15 15:24:14','2023-08-15 16:24:14'),(7,'Inactiva','A apólice foi paga ','2023-08-15 15:24:14','2023-08-15 16:45:53');
/*!40000 ALTER TABLE `apolice_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_fracionamento`
--

DROP TABLE IF EXISTS `apolice_fracionamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_fracionamento` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `FRACIONADO_EM` varchar(10) DEFAULT NULL,
  `NO_FRACOES` int DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_fracionamento`
--

LOCK TABLES `apolice_fracionamento` WRITE;
/*!40000 ALTER TABLE `apolice_fracionamento` DISABLE KEYS */;
INSERT INTO `apolice_fracionamento` VALUES (1,'Trimestre',3,'2023-08-14 10:27:32','2023-08-14 11:27:32'),(2,'Semestre',2,'2023-08-14 10:27:32','2023-08-14 11:27:32'),(3,'Anual',1,'2023-08-14 10:27:32','2023-08-14 11:27:32');
/*!40000 ALTER TABLE `apolice_fracionamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_historico`
--

DROP TABLE IF EXISTS `apolice_historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_historico` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_ID` int NOT NULL,
  `APOLICE_TIPO_ID` int NOT NULL,
  `APOLICE_ESTADO_ID` int NOT NULL,
  `ACCAO` varchar(255) DEFAULT NULL,
  `DATA` int DEFAULT NULL,
  `AUTOR_ACCAO` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICE_HI851163` (`APOLICE_ID`),
  KEY `FKAPOLICE_HI724695` (`APOLICE_TIPO_ID`),
  KEY `FKAPOLICE_HI457370` (`APOLICE_ESTADO_ID`),
  CONSTRAINT `FKAPOLICE_HI457370` FOREIGN KEY (`APOLICE_ESTADO_ID`) REFERENCES `apolice_estado` (`ID`),
  CONSTRAINT `FKAPOLICE_HI724695` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`),
  CONSTRAINT `FKAPOLICE_HI851163` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_historico`
--

LOCK TABLES `apolice_historico` WRITE;
/*!40000 ALTER TABLE `apolice_historico` DISABLE KEYS */;
/*!40000 ALTER TABLE `apolice_historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_item_segurado`
--

DROP TABLE IF EXISTS `apolice_item_segurado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_item_segurado` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_TIPO_ID` int NOT NULL,
  `ITEM_ID` int NOT NULL,
  `APOLICE_ID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICE_IT272194` (`APOLICE_TIPO_ID`),
  KEY `FKAPOLICE_IT332390` (`ITEM_ID`),
  KEY `FKAPOLICE_IT332490_idx` (`APOLICE_ID`),
  CONSTRAINT `FKAPOLICE_IT272194` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`),
  CONSTRAINT `FKAPOLICE_IT332390` FOREIGN KEY (`ITEM_ID`) REFERENCES `veiculo` (`ID`),
  CONSTRAINT `FKAPOLICE_IT332490` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_item_segurado`
--

LOCK TABLES `apolice_item_segurado` WRITE;
/*!40000 ALTER TABLE `apolice_item_segurado` DISABLE KEYS */;
/*!40000 ALTER TABLE `apolice_item_segurado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_pagamento`
--

DROP TABLE IF EXISTS `apolice_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_pagamento` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_ID` int NOT NULL,
  `DESCONTOS` decimal(13,2) DEFAULT NULL,
  `VALOR_PAGO` decimal(13,2) DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICE_PA210466` (`APOLICE_ID`),
  CONSTRAINT `FKAPOLICE_PA210466` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_pagamento`
--

LOCK TABLES `apolice_pagamento` WRITE;
/*!40000 ALTER TABLE `apolice_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `apolice_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_tipo`
--

DROP TABLE IF EXISTS `apolice_tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_tipo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SIGLA` varchar(30) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` mediumtext,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `SIGLA` (`SIGLA`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_tipo`
--

LOCK TABLES `apolice_tipo` WRITE;
/*!40000 ALTER TABLE `apolice_tipo` DISABLE KEYS */;
INSERT INTO `apolice_tipo` VALUES (1,'AUTO','Apólice de Seguro Automóvel','Considerado um seguro obrigatório em Angola, o Seguro Automóvel deve segurar a responsabilidade civil perante terceiros, transportados ou não, decorrente de lesões causadas por veículos terrestres a motor, seus reboques e semi-reboques, velocípedes e bicicletas. Adicionalmente pode ser contratado um seguro para danos próprios, que, de acordo com as condições gerais e específicas da apólice pode cobrir os riscos não previstos no âmbito do seguro obrigatório de responsabilidade civil automóvel, podendo abranger as seguintes coberturas: Responsabilidade Civil Facultativa; Choque, Colisão e Capotamento; Furto ou Roubo; Incêndio, Raio ou Explosão; Quebra Isolada de Vidros; Fenómenos da Natureza; Greves, Tumultos e Alterações da Ordem Pública; Privação de Uso; Ocupantes da Viatura; e outras garantias que venham a ser contratadas.',NULL,NULL,NULL,'2023-08-14 09:05:41','2023-08-14 10:08:42'),(2,'MULT','Apólice de Seguro Multirrisco','Tal seguro pode garantir, dentro dos limites e termos das condições gerais e específicas da apólice, a cobertura para perdas ou danos causados aos bens seguros indicados nas condições particulares da apólice, ou ainda, a responsabilidade civil extracontratual do segurado. Dentre os seguros multirriscos, destacam-se o Seguro Multirrisco Empresarial, o Seguro Multirrisco Habitação e Seguro Multirrisco Industrial.',NULL,NULL,NULL,'2023-08-14 09:08:42','2023-08-14 10:08:42'),(3,'SAUD','Apólice de Seguro Saúde','Um dos seguros mais admirados pelos colaboradores, o Seguro Saúde pode garantir à pessoa segura, em caso de sinistro ocorrido durante a sua vigência e coberto pela apólice, um conjunto de coberturas no domínio dos cuidados de saúde, conforme as condições gerais e específicas da apólice.',NULL,NULL,NULL,'2023-08-14 09:08:42','2023-08-14 10:08:42'),(4,'APES','Apólice de Seguro Acidentes Pessoais','O Seguro de Acidentes Pessoais pode garantir, dentro dos limites e condições da apólice, uma indemnização a seus colaboradores ou respectivos familiares em caso de acidente ocorrido de forma súbita, violenta, involuntária, exclusiva e de causa externa, que provoque lesões físicas, que, por si só e independente de toda e qualquer outra causa, tenha como consequência direta a morte, ou a invalidez do segurado, ou, ainda, que torne necessário tratamento médico.',NULL,NULL,NULL,'2023-08-14 09:10:42','2023-08-14 10:10:42'),(5,'TMER','Apólice de Seguro Transporte de Mercadorias','O seguro para Transporte de Mercadorias, ou Frete, pode garantir a indemnização, de acordo com as condições gerais e específicas da apólice, por perda ou danos à toda ou parte do bem seguro durante o transporte efectuado por algum meio de transporte ou por outro meio secundário ao mesmo e causados por qualquer acidente ou desastre não excluído de outra forma nas condições da apólice.',NULL,NULL,NULL,'2023-08-14 09:10:42','2023-08-14 10:10:42');
/*!40000 ALTER TABLE `apolice_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_tomador`
--

DROP TABLE IF EXISTS `apolice_tomador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_tomador` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `TOMADOR_ID` int NOT NULL,
  `APOLICE_ID` int NOT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT NULL,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICE_TO64820` (`TOMADOR_ID`),
  KEY `FKAPOLICE_TO613390` (`APOLICE_ID`),
  CONSTRAINT `FKAPOLICE_TO613390` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice` (`ID`),
  CONSTRAINT `FKAPOLICE_TO64820` FOREIGN KEY (`TOMADOR_ID`) REFERENCES `pessoa` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_tomador`
--

LOCK TABLES `apolice_tomador` WRITE;
/*!40000 ALTER TABLE `apolice_tomador` DISABLE KEYS */;
/*!40000 ALTER TABLE `apolice_tomador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cobertura`
--

DROP TABLE IF EXISTS `cobertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cobertura` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_TIPO_ID` int NOT NULL,
  `COBERTURA_BASE` bit(1) DEFAULT b'0',
  `SIGLA` varchar(30) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` longtext,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `VALOR_PAGAR` decimal(13,2) DEFAULT '0.00',
  `DESCONTO` decimal(13,2) DEFAULT '0.00',
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `SIGLA` (`SIGLA`),
  KEY `FKAPOLICE_CO255895` (`APOLICE_TIPO_ID`),
  CONSTRAINT `FKAPOLICE_CO255895` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cobertura`
--

LOCK TABLES `cobertura` WRITE;
/*!40000 ALTER TABLE `cobertura` DISABLE KEYS */;
INSERT INTO `cobertura` VALUES (1,1,_binary '','RTER','Responsabilidade Civil Perante Terceiros','A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:55:59'),(2,1,_binary '\0','RFAC','Responsabilidade Civil Facultativa','A cobertura de responsabilidade civil facultativa veicular (RCF-V) pode ser entendida, de forma simples, como aquela que cobre danos causados a terceiros. Inclui acidentes de trânsito, atropelamentos, batidas, entre outros. Você está dirigindo e as crianças pedem pra colocar música, por exemplo.',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(3,1,_binary '\0','CHOQ','Choque','O choque é um tipo de acidente em que o veículo em movimento choca-se contra um obstáculo fixo, que pode ser um muro, uma cerca, um poste, um ou mais veículos parados, meio fio, canteiro, ilha de segurança ou qualquer outro, inclusive casas',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(4,1,_binary '\0','CCAP','Colisão e Capotamento','Esta cobertura garante, até ao valor do capital seguro indicado nas Condições Particulares, o ressarcimento dos danos causados ao Veículo Seguro em virtude de choque (embate do veículo contra qualquer corpo fixo, ou sofrido por aquele quando imobilizado), colisão (embate do veículo com qualquer outro corpo em movimento), ou capotamento (acidente em que o veículo perca a sua posição normal e não resulte de Choque ou Colisão.)',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(5,1,_binary '\0','FROB','Furto ou Roubo','Danos derivados pelo desaparecimento, destruição ou deterioração do veículo por motivo de Furto e Roubo.Para que esta cobertura funcione terá sempre que participar às autoridades policiais o sucedido e solicitar o auto de ocorrência. Em caso de desaparecimento da viatura, o Segurador só o indemnizará se passados 60 dias da data de participação do Furto e Roubo, o veículo não tiver sido encontrado.  ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(6,1,_binary '\0','INCE','Incêndio','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(7,1,_binary '\0','RINC','Raio ou Explosão','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(8,1,_binary '\0','QISV','Quebra Isolada de Vidros','Incluem-se danos, em virtude de quebra isolada dos vidros, para-brisas, óculo traseiro e vidros laterais, causados por causa não compreendida, em qualquer outra cobertura. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(9,1,_binary '\0','FNAT','Fenómenos da Natureza','- Ação de greves, tumultos, motins e alterações da ordem pública;- Atos de vandalismo, terrorismo e sabotagem;- Ação direta de trombas de água, chuvas torrenciais, enxurradas e aluimento de terras;',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(10,1,_binary '\0','GREV','Greves',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(11,1,_binary '\0','TUOP','Tumultos e Alterações da Ordem Pública',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(12,1,_binary '\0','PUSO','Privação de Uso',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(13,1,_binary '\0','OCPV','Ocupantes da Viatura',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(81,1,_binary '\0','TERR','Responsabilidade Civil Perante Terceiros','A pessoa responderá dytdyiug',NULL,NULL,NULL,0.00,0.00,'2023-08-29 17:43:05','2023-08-29 20:12:51');
/*!40000 ALTER TABLE `cobertura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ficheiro`
--

DROP TABLE IF EXISTS `ficheiro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ficheiro` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SIZE` int NOT NULL,
  `PATH` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `EXT` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CONTENT` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ficheiro`
--

LOCK TABLES `ficheiro` WRITE;
/*!40000 ALTER TABLE `ficheiro` DISABLE KEYS */;
/*!40000 ALTER TABLE `ficheiro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_table`
--

DROP TABLE IF EXISTS `new_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Alto','Medio','Baixo') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_table`
--

LOCK TABLES `new_table` WRITE;
/*!40000 ALTER TABLE `new_table` DISABLE KEYS */;
INSERT INTO `new_table` VALUES (1,'Alto'),(2,'Baixo');
/*!40000 ALTER TABLE `new_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PESSOA_TIPO_ID` int NOT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DATA_NASCIMENTO` date DEFAULT NULL,
  `SEXO` varchar(1) DEFAULT NULL,
  `NBI` varchar(64) DEFAULT NULL,
  `NIF` varchar(64) DEFAULT NULL,
  `ESTADO_CIVIL` varchar(1) DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NIF` (`NIF`),
  UNIQUE KEY `NBI` (`NBI`),
  KEY `FKPESSOA892258` (`PESSOA_TIPO_ID`),
  CONSTRAINT `FKPESSOA892258` FOREIGN KEY (`PESSOA_TIPO_ID`) REFERENCES `pessoa_tipo` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (6,1,'Andre Marcos','1990-11-16','M','73365384565','43766465','S','2023-08-14 00:18:54','2023-08-14 01:18:54'),(7,1,'Semir Marcos','1959-11-16','M','73365354505','4378865','S','2023-08-14 00:18:54','2023-08-14 01:18:54');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa_endereco`
--

DROP TABLE IF EXISTS `pessoa_endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa_endereco` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PESSOA_ID` int NOT NULL,
  `TELEFONE` varchar(80) DEFAULT NULL,
  `TELEFONE_ALTERNATIVO` varchar(80) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `TELEFONE` (`TELEFONE`),
  UNIQUE KEY `EMAIL` (`EMAIL`),
  KEY `FKPESSOA_END360638` (`PESSOA_ID`),
  CONSTRAINT `FKPESSOA_END360638` FOREIGN KEY (`PESSOA_ID`) REFERENCES `pessoa` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa_endereco`
--

LOCK TABLES `pessoa_endereco` WRITE;
/*!40000 ALTER TABLE `pessoa_endereco` DISABLE KEYS */;
INSERT INTO `pessoa_endereco` VALUES (1,6,'989884938','988989943','am@giant.ao','2023-09-18 16:43:28','2023-09-18 17:43:28'),(2,7,'997858746','999847746','sm@giant.ao','2023-09-18 16:43:28','2023-09-18 17:43:28');
/*!40000 ALTER TABLE `pessoa_endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa_tipo`
--

DROP TABLE IF EXISTS `pessoa_tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa_tipo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME_TIPO` varchar(255) DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa_tipo`
--

LOCK TABLES `pessoa_tipo` WRITE;
/*!40000 ALTER TABLE `pessoa_tipo` DISABLE KEYS */;
INSERT INTO `pessoa_tipo` VALUES (1,'Pessoa Física','2023-08-13 23:58:43','2023-08-14 00:59:45'),(2,'Pessoa Jirídica','2023-08-13 23:58:43','2023-08-14 00:59:45');
/*!40000 ALTER TABLE `pessoa_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preco_cilindrada`
--

DROP TABLE IF EXISTS `preco_cilindrada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preco_cilindrada` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(255) DEFAULT NULL,
  `LOTACAO` int DEFAULT NULL,
  `VEICULO_CATEGORIA_ID` int NOT NULL,
  `PREMIO_TRIMESTRAL` decimal(13,2) DEFAULT NULL,
  `PREMIO_SEMESTRAL` decimal(13,2) DEFAULT NULL,
  `PREMIO_ANUAL` decimal(13,2) DEFAULT NULL,
  `PESO_KG` int DEFAULT NULL,
  `CILINDRADA_MIN` int DEFAULT NULL,
  `CILINDRADA_MAX` int DEFAULT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `FKPRECO_CILI487359` (`VEICULO_CATEGORIA_ID`),
  CONSTRAINT `FKPRECO_CILI487359` FOREIGN KEY (`VEICULO_CATEGORIA_ID`) REFERENCES `veiculo_categoria` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preco_cilindrada`
--

LOCK TABLES `preco_cilindrada` WRITE;
/*!40000 ALTER TABLE `preco_cilindrada` DISABLE KEYS */;
INSERT INTO `preco_cilindrada` VALUES (2,'Ligeiro Particular',NULL,1,6351.00,12582.00,24923.00,NULL,0,1300,NULL,NULL,'2023-08-14 08:28:38','2023-08-14 09:36:43'),(3,'Ligeiro Particular',NULL,1,8080.00,16007.00,31708.00,NULL,1301,1600,NULL,NULL,'2023-08-14 08:28:38','2023-08-14 09:35:32'),(4,'Camioneta Particular',NULL,2,20380.00,40374.00,79976.00,3600,0,1500,NULL,NULL,'2023-08-14 08:38:52','2023-08-14 09:43:45'),(5,'Camioneta Particular',NULL,2,24241.00,48024.00,95130.00,3600,0,2500,NULL,NULL,'2023-08-14 08:43:45','2023-08-14 09:43:45'),(6,'Auto Caravana',9,3,14553.00,28832.00,57112.00,NULL,0,1600,NULL,NULL,'2023-08-14 08:45:55','2023-08-14 09:45:55'),(7,'Auto Caravana',9,3,18919.00,37481.00,74246.00,NULL,2500,0,NULL,NULL,'2023-08-14 08:48:10','2023-08-14 09:48:10'),(8,'Camião Particular',NULL,4,14553.00,28832.00,57112.00,10000,0,1500,NULL,NULL,'2023-08-14 08:53:17','2023-08-14 09:53:17'),(9,'Camião Particular',NULL,4,37089.00,73477.00,145551.00,10000,1500,NULL,NULL,NULL,'2023-08-14 08:53:17','2023-08-14 09:53:17');
/*!40000 ALTER TABLE `preco_cilindrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculo`
--

DROP TABLE IF EXISTS `veiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `VEICULO_CATEGORIA_ID` int NOT NULL,
  `MATRICULA` varchar(24) DEFAULT NULL,
  `MARCA` varchar(255) DEFAULT NULL,
  `MODELO` varchar(255) DEFAULT NULL,
  `ANO_AQUISICAO` int DEFAULT NULL,
  `CAPITAL_AQUISICAO` decimal(13,2) DEFAULT NULL,
  `PESO_BRUTO` int DEFAULT NULL,
  `N_LOTACAO` int DEFAULT NULL,
  `ANO_FABRICO` int DEFAULT NULL,
  `CILINDRADA` int DEFAULT NULL,
  `REF_CHASSI` varchar(64) DEFAULT NULL,
  `DESCRICAO` varchar(4000) DEFAULT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT NULL,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `MATRICULA` (`MATRICULA`),
  KEY `FKVEICULO357677` (`VEICULO_CATEGORIA_ID`),
  CONSTRAINT `FKVEICULO357677` FOREIGN KEY (`VEICULO_CATEGORIA_ID`) REFERENCES `veiculo_categoria` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
/*!40000 ALTER TABLE `veiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculo_categoria`
--

DROP TABLE IF EXISTS `veiculo_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculo_categoria` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(255) DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT NULL,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo_categoria`
--

LOCK TABLES `veiculo_categoria` WRITE;
/*!40000 ALTER TABLE `veiculo_categoria` DISABLE KEYS */;
INSERT INTO `veiculo_categoria` VALUES (1,'Ligeriro ',NULL,NULL,NULL,NULL),(2,'Camionetas',NULL,NULL,NULL,NULL),(3,'Autocaravanas',NULL,NULL,NULL,NULL),(4,'Pesados',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `veiculo_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'giant_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-04 12:55:51
