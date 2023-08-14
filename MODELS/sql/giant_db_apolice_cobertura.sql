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
-- Table structure for table `apolice_cobertura`
--

DROP TABLE IF EXISTS `apolice_cobertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apolice_cobertura` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `APOLICE_TIPO_ID` int NOT NULL,
  `COBERTURA_BASE` bit(1) DEFAULT b'0',
  `SIGLA` varchar(30) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` longtext,
  `INSERIDO_POR` int DEFAULT NULL,
  `ACTUALIZADO_POR` int DEFAULT NULL,
  `REMOVIDO_POR` int DEFAULT NULL,
  `VALOR_PAGAR` decimal(13,2) DEFAULT NULL,
  `DESCONTO` decimal(13,2) DEFAULT NULL,
  `DATA_CRIACAO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DATA_ACTUALIZACAO` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `SIGLA` (`SIGLA`),
  KEY `FKAPOLICE_CO255895` (`APOLICE_TIPO_ID`),
  CONSTRAINT `FKAPOLICE_CO255895` FOREIGN KEY (`APOLICE_TIPO_ID`) REFERENCES `apolice_tipo` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apolice_cobertura`
--

LOCK TABLES `apolice_cobertura` WRITE;
/*!40000 ALTER TABLE `apolice_cobertura` DISABLE KEYS */;
INSERT INTO `apolice_cobertura` VALUES (1,1,_binary '','RTER','Responsabilidade civil perante terceiros','A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(2,1,_binary '\0','RFAC','Responsabilidade Civil Facultativa','A cobertura de responsabilidade civil facultativa veicular (RCF-V) pode ser entendida, de forma simples, como aquela que cobre danos causados a terceiros. Inclui acidentes de trânsito, atropelamentos, batidas, entre outros. Você está dirigindo e as crianças pedem pra colocar música, por exemplo.',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(3,1,_binary '\0','CHOQ','Choque','O choque é um tipo de acidente em que o veículo em movimento choca-se contra um obstáculo fixo, que pode ser um muro, uma cerca, um poste, um ou mais veículos parados, meio fio, canteiro, ilha de segurança ou qualquer outro, inclusive casas',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(4,1,_binary '\0','CCAP','Colisão e Capotamento','Esta cobertura garante, até ao valor do capital seguro indicado nas Condições Particulares, o ressarcimento dos danos causados ao Veículo Seguro em virtude de choque (embate do veículo contra qualquer corpo fixo, ou sofrido por aquele quando imobilizado), colisão (embate do veículo com qualquer outro corpo em movimento), ou capotamento (acidente em que o veículo perca a sua posição normal e não resulte de Choque ou Colisão.)',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(5,1,_binary '\0','FROB','Furto ou Roubo','Danos derivados pelo desaparecimento, destruição ou deterioração do veículo por motivo de Furto e Roubo.Para que esta cobertura funcione terá sempre que participar às autoridades policiais o sucedido e solicitar o auto de ocorrência. Em caso de desaparecimento da viatura, o Segurador só o indemnizará se passados 60 dias da data de participação do Furto e Roubo, o veículo não tiver sido encontrado.  ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(6,1,_binary '\0','INCE','Incêndio','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(7,1,_binary '\0','RINC','Raio ou Explosão','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(8,1,_binary '\0','QISV','Quebra Isolada de Vidros','Incluem-se danos, em virtude de quebra isolada dos vidros, para-brisas, óculo traseiro e vidros laterais, causados por causa não compreendida, em qualquer outra cobertura. ',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(9,1,_binary '\0','FNAT','Fenómenos da Natureza','- Ação de greves, tumultos, motins e alterações da ordem pública;- Atos de vandalismo, terrorismo e sabotagem;- Ação direta de trombas de água, chuvas torrenciais, enxurradas e aluimento de terras;',NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(10,1,_binary '\0','GREV','Greves',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(11,1,_binary '\0','TUOP','Tumultos e Alterações da Ordem Pública',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(12,1,_binary '\0','PUSO','Privação de Uso',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24'),(13,1,_binary '\0','OCPV','Ocupantes da Viatura',NULL,NULL,NULL,NULL,NULL,NULL,'2023-08-14 09:49:24','2023-08-14 10:49:24');
/*!40000 ALTER TABLE `apolice_cobertura` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-14 10:52:03
