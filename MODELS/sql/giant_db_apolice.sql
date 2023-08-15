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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-14 10:52:02