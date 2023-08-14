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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-14 10:52:02
