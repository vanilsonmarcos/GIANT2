CREATE DATABASE  IF NOT EXISTS `giant_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `giant_db`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 104.131.168.16    Database: giant_db
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('6a50a9c0-860b-4071-b502-c41b433be3b2','8fb14a64835bb2681790c5e2f72360031ace35a5bc5a2e1385e8c7ff51debfea','2023-10-05 16:52:47.138','20231004115652_giant_db_20231004',NULL,NULL,'2023-10-05 16:52:46.116',1),('cb93fb33-797a-48ab-b6a9-16e4872d31a3','f5d76667ed1e78eab7a2d19e329c694c6b14129e64afff5fdc87c17dec95c378','2023-10-05 16:52:52.661','20231005165252_',NULL,NULL,'2023-10-05 16:52:52.620',1),('ed2c1a68-ce1a-47e9-9542-1a52e17febaf','7538e21d3e55f478d31605ec232b49325956174b67159942cfe949e4462c28f2','2023-10-05 16:52:47.172','20231004211307_',NULL,NULL,'2023-10-05 16:52:47.140',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adenda`
--

DROP TABLE IF EXISTS `adenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adenda` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_ID` int DEFAULT NULL,
  `NUMERO` varchar(45) DEFAULT NULL,
  `PREMIO` decimal(10,2) NOT NULL,
  `DATA_INICIO` datetime NOT NULL,
  `DATA_FIM` datetime NOT NULL,
  `DATA_INSERCAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKADENDAPOLICE_idx` (`APOLICE_ID`),
  CONSTRAINT `FKADENDAPOLICE` FOREIGN KEY (`APOLICE_ID`) REFERENCES `apolice` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adenda`
--

LOCK TABLES `adenda` WRITE;
/*!40000 ALTER TABLE `adenda` DISABLE KEYS */;
INSERT INTO `adenda` VALUES (7,2,'0001/2023',12000000.00,'2023-01-11 00:00:00','2023-05-10 00:00:00','2023-11-13 13:38:57','2023-11-13 13:38:57',NULL,NULL);
/*!40000 ALTER TABLE `adenda` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ADENDA_NUMERO` BEFORE INSERT ON `adenda` FOR EACH ROW BEGIN
	DECLARE next_number INT;
    DECLARE NUMERO VARCHAR(4) DEFAULT 0000;

    -- Calculate the next number
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(NUMERO, '/', 1) AS UNSIGNED)), 0) + 1 INTO next_number
    FROM adenda;

    -- Calculate the formatted year
    SET NUMERO = YEAR(NOW());

    -- Combine the next_number and formatted_year
    SET NEW.NUMERO = CONCAT(LPAD(next_number, 4, '0'), '/' , NUMERO);


END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `adenda_item_segurado`
--

DROP TABLE IF EXISTS `adenda_item_segurado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adenda_item_segurado` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ADENDA_ID` int DEFAULT NULL,
  `APOLICE_TIPO_ID` int DEFAULT NULL,
  `ITEM_ID` int DEFAULT NULL,
  `PREMIO` decimal(10,2) DEFAULT NULL,
  `DATA_INSERCAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ADENDAITEM` (`ADENDA_ID`,`ITEM_ID`),
  KEY `FKADENDAAPOLICETIPO_idx` (`APOLICE_TIPO_ID`),
  KEY `FKADENDAITEMID_idx` (`ITEM_ID`) /*!80000 INVISIBLE */,
  KEY `FKADENDA_idx` (`ADENDA_ID`) /*!80000 INVISIBLE */,
  CONSTRAINT `FKADENDA` FOREIGN KEY (`ADENDA_ID`) REFERENCES `adenda` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FKADENDAAPOLICETIPO` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FKADENDAITEMID` FOREIGN KEY (`ITEM_ID`) REFERENCES `veiculo` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adenda_item_segurado`
--

LOCK TABLES `adenda_item_segurado` WRITE;
/*!40000 ALTER TABLE `adenda_item_segurado` DISABLE KEYS */;
INSERT INTO `adenda_item_segurado` VALUES (1,7,1,1,12000000.00,'2023-11-16 05:43:17',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adenda_item_segurado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adenda_pagamento`
--

DROP TABLE IF EXISTS `adenda_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adenda_pagamento` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ADENDA_ID` int DEFAULT NULL,
  `DESCONTOS` decimal(10,2) NOT NULL,
  `VALOR_PAGO` decimal(10,2) NOT NULL,
  `DATA_INSERCAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT NULL,
  `DATA_REMOCACAO` datetime DEFAULT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKADENDAPAGA_idx` (`ADENDA_ID`),
  CONSTRAINT `FKADENDAPAGA` FOREIGN KEY (`ADENDA_ID`) REFERENCES `adenda` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adenda_pagamento`
--

LOCK TABLES `adenda_pagamento` WRITE;
/*!40000 ALTER TABLE `adenda_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `adenda_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adenda_segurado`
--

DROP TABLE IF EXISTS `adenda_segurado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adenda_segurado` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SEGURADO_ID` int DEFAULT NULL,
  `ADENDA_ID` int DEFAULT NULL,
  `DATA_INSERCAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ADENDASEGURADO` (`SEGURADO_ID`,`ADENDA_ID`),
  KEY `FRKADENPESS_idx` (`SEGURADO_ID`),
  KEY `FRKADENDAADENDA_idx` (`ADENDA_ID`),
  CONSTRAINT `FRKADENDAADENDA` FOREIGN KEY (`ADENDA_ID`) REFERENCES `adenda` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FRKADENPESS` FOREIGN KEY (`SEGURADO_ID`) REFERENCES `pessoa` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adenda_segurado`
--

LOCK TABLES `adenda_segurado` WRITE;
/*!40000 ALTER TABLE `adenda_segurado` DISABLE KEYS */;
INSERT INTO `adenda_segurado` VALUES (1,5,7,'2023-11-16 05:46:08',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adenda_segurado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice`
--

DROP TABLE IF EXISTS `apolice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_TIPO_ID` int NOT NULL,
  `APOLICE_ESTADO_ID` int NOT NULL,
  `APOLICE_FRACIONAMENTO_ID` int NOT NULL,
  `NUMERO` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `TOMADOR_ID` int NOT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `FKAPOLICE218101` (`APOLICE_ESTADO_ID`),
  KEY `FKAPOLICE395825` (`TOMADOR_ID`),
  KEY `FKAPOLICE49224` (`APOLICE_TIPO_ID`),
  KEY `FKAPOLICE599017` (`APOLICE_FRACIONAMENTO_ID`),
  CONSTRAINT `FKAPOLICE218101` FOREIGN KEY (`APOLICE_ESTADO_ID`) REFERENCES `apolice_estado` (`ID`) ON UPDATE CASCADE,
  CONSTRAINT `FKAPOLICE49224` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`) ON UPDATE CASCADE,
  CONSTRAINT `FKAPOLICE599017` FOREIGN KEY (`APOLICE_FRACIONAMENTO_ID`) REFERENCES `apolice_fracionamento` (`ID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice`
--

LOCK TABLES `apolice` WRITE;
/*!40000 ALTER TABLE `apolice` DISABLE KEYS */;
INSERT INTO `apolice` VALUES (2,1,6,1,'34343',1,NULL,NULL,'2023-11-11 12:58:03',NULL),(3,1,6,1,'1 12.112023/0',1,NULL,NULL,'2023-11-12 00:12:23',NULL),(4,1,3,1,'1 12 11.2023/0001',1,NULL,NULL,'2023-11-12 00:18:56',NULL);
/*!40000 ALTER TABLE `apolice` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `apolice_BEFORE_INSERT` BEFORE INSERT ON `apolice` FOR EACH ROW BEGIN
	DECLARE next_number INT;
    DECLARE NUMERO VARCHAR(4) DEFAULT 0000;

    -- Calculate the next number
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(NUMERO, '/', 1) AS UNSIGNED)), 0) + 1 INTO next_number
    FROM apolice;
    
  SET NEW.NUMERO = CONCAT(DATE_FORMAT(NOW(), '%d %m.%Y'), '/', LPAD(next_number, 4, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `apolice_estado`
--

DROP TABLE IF EXISTS `apolice_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_estado` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DESCRICAO` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_estado`
--

LOCK TABLES `apolice_estado` WRITE;
/*!40000 ALTER TABLE `apolice_estado` DISABLE KEYS */;
INSERT INTO `apolice_estado` VALUES (1,'Em Processamento','A Apolice está em processamento; é um estado temporário em que a se encontra',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(2,'Suspensa','A apolice está suspensa',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(3,'Cancelada','A apólice está cancelada',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(4,'Expirada','A apólice passou a data de renovação',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(5,'Activa','A apólice está valida durante o tempo em que é visualizada',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(6,'Em Simulação','A apolice ainda está em estado de simulação',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(7,'Inactiva','A apólice foi paga',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37');
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
  `FRACIONADO_EM` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NO_FRACOES` int NOT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_fracionamento`
--

LOCK TABLES `apolice_fracionamento` WRITE;
/*!40000 ALTER TABLE `apolice_fracionamento` DISABLE KEYS */;
INSERT INTO `apolice_fracionamento` VALUES (1,'Anual',1,'2023-11-11 10:57:39','2023-11-11 11:57:39'),(2,'Semestral',2,'2023-11-11 10:57:39','2023-11-11 11:57:39'),(3,'Trimestral',4,'2023-11-11 10:57:39','2023-11-11 11:57:39');
/*!40000 ALTER TABLE `apolice_fracionamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apolice_tipo`
--

DROP TABLE IF EXISTS `apolice_tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_tipo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SIGLA` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NOME` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DESCRICAO` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_CRIACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `SIGLA` (`SIGLA`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_tipo`
--

LOCK TABLES `apolice_tipo` WRITE;
/*!40000 ALTER TABLE `apolice_tipo` DISABLE KEYS */;
INSERT INTO `apolice_tipo` VALUES (1,'APSAT','Apólice de seguro automóvel','O seguro automotivo, também conhecido apenas como seguro auto, é outra possibilidade popular no mercado brasileiro. Como o nome sugere, ele é voltado para proteger veículos automotores. Além de carros, essa alternativa pode servir para proteger motos e caminhões,',NULL,NULL,NULL,'2023-11-10 09:29:38','2023-11-10 09:29:38'),(2,'APSRE','Apólice de seguro residencial','O seguro residencial tem como principal objetivo proteger um imóvel nas condições previstas em contrato. Ele é aplicável tanto a casas quanto a apartamentos e atende às necessidades variadas de proprietários e locatários.',NULL,NULL,NULL,'2023-11-10 09:29:38','2023-11-10 09:29:38'),(3,'APSVI','Apólice de seguro de viajem','O seguro viagem é uma modalidade voltada aos viajantes nacionais e internacionais que desejem ter assistência diante de eventualidades. ',NULL,NULL,NULL,'2023-11-10 09:29:38','2023-11-10 09:29:38');
/*!40000 ALTER TABLE `apolice_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cobertura`
--

DROP TABLE IF EXISTS `cobertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cobertura` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_TIPO_ID` int DEFAULT NULL,
  `COBERTURA_BASE` bit(1) NOT NULL DEFAULT b'0',
  `SIGLA` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NOME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DESCRICAO` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `VALOR_A_PAGAR` decimal(13,2) NOT NULL DEFAULT '0.00',
  `DESCONTO` decimal(13,2) NOT NULL DEFAULT '0.00',
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `SIGLA` (`SIGLA`),
  KEY `FKAPOLICE_CO255895` (`APOLICE_TIPO_ID`),
  CONSTRAINT `FKAPOLICE_CO255895` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cobertura`
--

LOCK TABLES `cobertura` WRITE;
/*!40000 ALTER TABLE `cobertura` DISABLE KEYS */;
INSERT INTO `cobertura` VALUES (1,1,_binary '','RTER','Responsabilidade civil perante terceiros','A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente.',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(2,1,_binary '\0','RFAC','Responsabilidade Civil Facultativa','A cobertura de responsabilidade civil facultativa veicular (RCF-V) pode ser entendida, de forma simples, como aquela que cobre danos causados a terceiros. Inclui acidentes de trânsito, atropelamentos, batidas, entre outros. Você está dirigindo e as crianças pedem pra colocar música, por exemplo.',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(3,1,_binary '\0','CHOQ','Choque','O choque é um tipo de acidente em que o veículo em movimento choca-se contra um obstáculo fixo, que pode ser um muro, uma cerca, um poste, um ou mais veículos parados, meio fio, canteiro, ilha de segurança ou qualquer outro, inclusive casas',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(4,1,_binary '\0','CCAP','Colisão e Capotamento','Esta cobertura garante, até ao valor do capital seguro indicado nas Condições Particulares, o ressarcimento dos danos causados ao Veículo Seguro em virtude de choque (embate do veículo contra qualquer corpo fixo, ou sofrido por aquele quando imobilizado), colisão (embate do veículo com qualquer outro corpo em movimento), ou capotamento (acidente em que o veículo perca a sua posição normal e não resulte de Choque ou Colisão.)',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(5,1,_binary '\0','FROB','Furto ou Roubo','Danos derivados pelo desaparecimento, destruição ou deterioração do veículo por motivo de Furto e Roubo.Para que esta cobertura funcione terá sempre que participar às autoridades policiais o sucedido e solicitar o auto de ocorrência. Em caso de desaparecimento da viatura, o Segurador só o indemnizará se passados 60 dias da data de participação do Furto e Roubo, o veículo não tiver sido encontrado.',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(6,1,_binary '\0','INCE','Incêndio','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(7,1,_binary '\0','RINC','Raio ou Explosão','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(8,1,_binary '\0','QISV','Quebra Isolada de Vidros','Incluem-se danos, em virtude de quebra isolada dos vidros, para-brisas, óculo traseiro e vidros laterais, causados por causa não compreendida, em qualquer outra cobertura. ',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(9,1,_binary '\0','FNAT','Fenómenos da Natureza','- Ação de greves, tumultos, motins e alterações da ordem pública;- Atos de vandalismo, terrorismo e sabotagem;- Ação direta de trombas de água, chuvas torrenciais, enxurradas e aluimento de terras;',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(10,1,_binary '\0','GREV','Greves','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(11,1,_binary '\0','TUOP','Tumultos e Alterações da Ordem Pública','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(12,1,_binary '\0','PUSO','Privação de Uso','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(13,1,_binary '\0','OCPV','Ocupantes da Viatura','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38');
/*!40000 ALTER TABLE `cobertura` ENABLE KEYS */;
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
  `ENDERECO_ID` int DEFAULT NULL,
  `NOME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DATA_NASCIMENTO` date NOT NULL,
  `SEXO` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NBI` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NIF` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ESTADO_CIVIL` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NIF` (`NIF`),
  UNIQUE KEY `NBI` (`NBI`),
  UNIQUE KEY `ENDERECO_ID_UNIQUE` (`ENDERECO_ID`),
  KEY `FKPESSOA892258` (`PESSOA_TIPO_ID`),
  KEY `FKPESSOAADR_idx` (`ENDERECO_ID`),
  CONSTRAINT `FKPESSOA892258` FOREIGN KEY (`PESSOA_TIPO_ID`) REFERENCES `pessoa_tipo` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKPESSOAADR` FOREIGN KEY (`ENDERECO_ID`) REFERENCES `pessoa_endereco` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,1,1,'Pedro Nuno Santos','1962-07-02','M','003466243LA35','003466243LA35','S',NULL,NULL),(2,1,2,'Andre Vieira','1977-11-06','M','004556243LA24','004556243LA24','C',NULL,NULL),(3,1,3,'Maria Miguel','1986-04-12','F','005674243LA33','005674243LA33','C',NULL,NULL),(4,1,4,'Alexandre Vicente','1988-03-24','M','002556243LA22','002556243LA22','C',NULL,NULL),(5,1,5,'Talita Aleixo','1990-01-07','F','005236243LA03','005236243LA03','S',NULL,NULL);
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
  `TELEFONE` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TELEFONE_ALTERNATIVO` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `EMAIL` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BAIRRO` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CIDADE` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PROVINCIA` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `TELEFONE` (`TELEFONE`),
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa_endereco`
--

LOCK TABLES `pessoa_endereco` WRITE;
/*!40000 ALTER TABLE `pessoa_endereco` DISABLE KEYS */;
INSERT INTO `pessoa_endereco` VALUES (1,'933000300','933000301','psantos@infoco.ao','Talatona','Luanda','Luanda','2023-11-15 20:56:34','2023-11-15 21:56:34'),(2,'944000400','944000401','avieira@infoco.ao','Boa fé','Luanda','Luanda','2023-11-15 21:02:16','2023-11-15 22:02:16'),(3,'955000500','955000501','mmiguel@infoco.ao','Luanda Sul','Luanda','Luanda','2023-11-15 21:02:16','2023-11-15 22:02:16'),(4,'966000600','966000601','avicente@infoco.ao','Dangereux','Luanda','Luanda','2023-11-15 21:02:17','2023-11-15 22:02:17'),(5,'977000700','966000701','taleixo@infoco.ao','Camama','Luanda','Luanda','2023-11-15 21:02:17','2023-11-15 22:02:17'),(6,'928742774','928742774','danimoniz@infoco.ao','Nova Vida','Luanda','Luanda','2023-11-27 07:29:37','2023-11-27 07:29:37'),(12,'933874821','933874821','daniel@infoco.ao','Talatona','Luanda','Luanda','2023-11-28 23:19:17','2023-11-28 23:19:17');
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
  `NOME_TIPO` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa_tipo`
--

LOCK TABLES `pessoa_tipo` WRITE;
/*!40000 ALTER TABLE `pessoa_tipo` DISABLE KEYS */;
INSERT INTO `pessoa_tipo` VALUES (1,'Pessoa Física','2023-11-10 08:29:37','2023-11-10 09:29:37'),(2,'Pessoa Jurídica','2023-11-10 08:29:37','2023-11-10 09:29:37');
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
  `NOME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `LOTACAO` int NOT NULL DEFAULT '0',
  `VEICULO_CATEGORIA_ID` int NOT NULL,
  `PREMIO_TRIMESTRAL` decimal(13,2) NOT NULL DEFAULT '0.00',
  `PREMIO_SEMESTRAL` decimal(13,2) NOT NULL DEFAULT '0.00',
  `PREMIO_ANUAL` decimal(13,2) NOT NULL DEFAULT '0.00',
  `PESO_KG` int NOT NULL DEFAULT '0',
  `CILINDRADA_MIN` int NOT NULL,
  `CILINDRADA_MAX` int NOT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `FKPRECO_CILI487359` (`VEICULO_CATEGORIA_ID`),
  CONSTRAINT `FKPRECO_CILI487359` FOREIGN KEY (`VEICULO_CATEGORIA_ID`) REFERENCES `veiculo_categoria` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preco_cilindrada`
--

LOCK TABLES `preco_cilindrada` WRITE;
/*!40000 ALTER TABLE `preco_cilindrada` DISABLE KEYS */;
INSERT INTO `preco_cilindrada` VALUES (15,'Ligeiro Particular',0,1,6351.00,12582.00,24923.00,0,0,1300,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(16,'Camioneta Particular',0,2,20380.00,40374.00,79976.00,0,0,1300,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(17,'Camioneta Particular',0,2,24241.00,48024.00,95130.00,3600,0,2500,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(18,'Auto Caravana',9,3,14553.00,28832.00,57112.00,0,0,1600,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(19,'Auto Caravana',9,3,18919.00,37481.00,74246.00,0,0,2500,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(20,'Camião Particular',0,4,14553.00,28832.00,57112.00,10000,1500,0,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(21,'Camião Particular',0,4,37089.00,73477.00,145551.00,10000,0,1500,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47');
/*!40000 ALTER TABLE `preco_cilindrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguradora`
--

DROP TABLE IF EXISTS `seguradora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguradora` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NIF` varchar(45) NOT NULL,
  `ENDERECO` varchar(200) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `TELEFONE` varchar(45) NOT NULL,
  `TELEFONE_ALT` varchar(45) NOT NULL,
  `WEB_SITE` varchar(150) NOT NULL,
  `DATA_CRIACAO` datetime DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguradora`
--

LOCK TABLES `seguradora` WRITE;
/*!40000 ALTER TABLE `seguradora` DISABLE KEYS */;
INSERT INTO `seguradora` VALUES (1,'5417588962','Ingombotas - Rua da Missão nº 79 | Luanda','geral@giantseguros.co.ao','929280828','929280602','www.giantseguros.ao','2023-11-10 09:29:38',NULL);
/*!40000 ALTER TABLE `seguradora` ENABLE KEYS */;
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
  `MATRICULA` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `MARCA` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `MODELO` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ANO_AQUISICAO` int NOT NULL,
  `CAPITAL_AQUISICAO` decimal(13,2) NOT NULL,
  `PESO_BRUTO` int NOT NULL,
  `N_LOTACAO` int NOT NULL,
  `ANO_FABRICO` int NOT NULL,
  `CILINDRADA` int NOT NULL,
  `REF_CHASSI` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DESCRICAO` varchar(4000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT NULL,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `MATRICULA` (`MATRICULA`),
  KEY `FKVEICULO357677` (`VEICULO_CATEGORIA_ID`),
  CONSTRAINT `FKVEICULO357677` FOREIGN KEY (`VEICULO_CATEGORIA_ID`) REFERENCES `veiculo_categoria` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
INSERT INTO `veiculo` VALUES (1,1,'LD-14-15-CW','Chevrolet','Spark',2010,1300000.00,1230,5,2009,1000,'2543GGADT47','Bom Veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(2,1,'LD-10-10-AA','Kia','Soul',2012,5000000.00,2400,5,2014,1200,'98543KDSGH5','Bom Veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(3,2,'LD-00-22-FG','Toyota','Land Cruiser',2017,20000000.00,3000,8,2017,3000,'KJDFGH87534','Bom Veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(4,1,'LD-14-24-AD','Kia','Morning',2020,6700000.00,2354,4,2018,5212,'2832632BMVSV03','Simples descrição do veiculo',NULL,NULL,NULL,NULL,NULL,NULL);
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
  `NOME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `DATA_INSERCAO` timestamp NULL DEFAULT NULL,
  `DATA_ACTUALIZACAO` timestamp NULL DEFAULT NULL,
  `DATA_REMOCAO` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
-- Dumping events for database 'giant_db'
--

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

-- Dump completed on 2023-11-29 15:37:20
