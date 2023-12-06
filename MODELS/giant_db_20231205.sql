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
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('07cdd645-8c20-4d66-95a5-0fcc72ee27ee','9944e50191091d19531ac527e7f203d98acd45701250bbdbc5c274a139024c5a',NULL,'20231129111738_29_11_23_12_16','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20231129111738_29_11_23_12_16\n\nDatabase error code: 1091\n\nDatabase error:\nCan\'t DROP \'FKAPOLICE395825\'; check that column/key exists\n\nPlease check the query number 2 from the migration file.\n\n   0: sql_schema_connector::apply_migration::apply_script\n           with migration_name=\"20231129111738_29_11_23_12_16\"\n             at schema-engine/connectors/sql-schema-connector/src/apply_migration.rs:106\n   1: schema_core::commands::apply_migrations::Applying migration\n           with migration_name=\"20231129111738_29_11_23_12_16\"\n             at schema-engine/core/src/commands/apply_migrations.rs:91\n   2: schema_core::state::ApplyMigrations\n             at schema-engine/core/src/state.rs:201','2023-11-30 08:36:32.218','2023-11-30 07:58:05.943',0),('6a50a9c0-860b-4071-b502-c41b433be3b2','8fb14a64835bb2681790c5e2f72360031ace35a5bc5a2e1385e8c7ff51debfea','2023-10-05 16:52:47.138','20231004115652_giant_db_20231004',NULL,NULL,'2023-10-05 16:52:46.116',1),('cb93fb33-797a-48ab-b6a9-16e4872d31a3','f5d76667ed1e78eab7a2d19e329c694c6b14129e64afff5fdc87c17dec95c378','2023-10-05 16:52:52.661','20231005165252_',NULL,NULL,'2023-10-05 16:52:52.620',1),('ed2c1a68-ce1a-47e9-9542-1a52e17febaf','7538e21d3e55f478d31605ec232b49325956174b67159942cfe949e4462c28f2','2023-10-05 16:52:47.172','20231004211307_',NULL,NULL,'2023-10-05 16:52:47.140',1),('ff2388de-3478-4879-9e7f-c1ecc7591474','9944e50191091d19531ac527e7f203d98acd45701250bbdbc5c274a139024c5a','2023-11-30 08:36:32.224','20231129111738_29_11_23_12_16','',NULL,'2023-11-30 08:36:32.224',0);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `adenda_item_segurado`
--

LOCK TABLES `adenda_item_segurado` WRITE;
/*!40000 ALTER TABLE `adenda_item_segurado` DISABLE KEYS */;
INSERT INTO `adenda_item_segurado` VALUES (1,7,1,1,12000000.00,'2023-11-16 05:43:17',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adenda_item_segurado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `adenda_pagamento`
--

LOCK TABLES `adenda_pagamento` WRITE;
/*!40000 ALTER TABLE `adenda_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `adenda_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `adenda_segurado`
--

LOCK TABLES `adenda_segurado` WRITE;
/*!40000 ALTER TABLE `adenda_segurado` DISABLE KEYS */;
INSERT INTO `adenda_segurado` VALUES (1,5,7,'2023-11-16 05:46:08',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adenda_segurado` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `apolice_estado`
--

LOCK TABLES `apolice_estado` WRITE;
/*!40000 ALTER TABLE `apolice_estado` DISABLE KEYS */;
INSERT INTO `apolice_estado` VALUES (1,'Em Processamento','A Apolice está em processamento; é um estado temporário em que a se encontra',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(2,'Suspensa','A apolice está suspensa',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(3,'Cancelada','A apólice está cancelada',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(4,'Expirada','A apólice passou a data de renovação',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(5,'Activa','A apólice está valida durante o tempo em que é visualizada',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(6,'Em Simulação','A apolice ainda está em estado de simulação',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37'),(7,'Inactiva','A apólice foi paga',NULL,NULL,NULL,'2023-11-10 08:29:37','2023-11-10 09:29:37');
/*!40000 ALTER TABLE `apolice_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `apolice_fracionamento`
--

LOCK TABLES `apolice_fracionamento` WRITE;
/*!40000 ALTER TABLE `apolice_fracionamento` DISABLE KEYS */;
INSERT INTO `apolice_fracionamento` VALUES (1,'Anual',1,'2023-11-11 10:57:39','2023-11-11 11:57:39'),(2,'Semestral',2,'2023-11-11 10:57:39','2023-11-11 11:57:39'),(3,'Trimestral',4,'2023-11-11 10:57:39','2023-11-11 11:57:39');
/*!40000 ALTER TABLE `apolice_fracionamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `apolice_tipo`
--

LOCK TABLES `apolice_tipo` WRITE;
/*!40000 ALTER TABLE `apolice_tipo` DISABLE KEYS */;
INSERT INTO `apolice_tipo` VALUES (1,'APSAT','Apólice de seguro automóvel','O seguro automotivo, também conhecido apenas como seguro auto, é outra possibilidade popular no mercado brasileiro. Como o nome sugere, ele é voltado para proteger veículos automotores. Além de carros, essa alternativa pode servir para proteger motos e caminhões,',NULL,NULL,NULL,'2023-11-10 09:29:38','2023-11-10 09:29:38'),(2,'APSRE','Apólice de seguro residencial','O seguro residencial tem como principal objetivo proteger um imóvel nas condições previstas em contrato. Ele é aplicável tanto a casas quanto a apartamentos e atende às necessidades variadas de proprietários e locatários.',NULL,NULL,NULL,'2023-11-10 09:29:38','2023-11-10 09:29:38'),(3,'APSVI','Apólice de seguro de viajem','O seguro viagem é uma modalidade voltada aos viajantes nacionais e internacionais que desejem ter assistência diante de eventualidades. ',NULL,NULL,NULL,'2023-11-10 09:29:38','2023-11-10 09:29:38');
/*!40000 ALTER TABLE `apolice_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cobertura`
--

LOCK TABLES `cobertura` WRITE;
/*!40000 ALTER TABLE `cobertura` DISABLE KEYS */;
INSERT INTO `cobertura` VALUES (1,1,_binary '','RTER','Responsabilidade civil perante terceiros','A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente.',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(2,1,_binary '\0','RFAC','Responsabilidade Civil Facultativa','A cobertura de responsabilidade civil facultativa veicular (RCF-V) pode ser entendida, de forma simples, como aquela que cobre danos causados a terceiros. Inclui acidentes de trânsito, atropelamentos, batidas, entre outros. Você está dirigindo e as crianças pedem pra colocar música, por exemplo.',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(3,1,_binary '\0','CHOQ','Choque','O choque é um tipo de acidente em que o veículo em movimento choca-se contra um obstáculo fixo, que pode ser um muro, uma cerca, um poste, um ou mais veículos parados, meio fio, canteiro, ilha de segurança ou qualquer outro, inclusive casas',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(4,1,_binary '\0','CCAP','Colisão e Capotamento','Esta cobertura garante, até ao valor do capital seguro indicado nas Condições Particulares, o ressarcimento dos danos causados ao Veículo Seguro em virtude de choque (embate do veículo contra qualquer corpo fixo, ou sofrido por aquele quando imobilizado), colisão (embate do veículo com qualquer outro corpo em movimento), ou capotamento (acidente em que o veículo perca a sua posição normal e não resulte de Choque ou Colisão.)',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(5,1,_binary '\0','FROB','Furto ou Roubo','Danos derivados pelo desaparecimento, destruição ou deterioração do veículo por motivo de Furto e Roubo.Para que esta cobertura funcione terá sempre que participar às autoridades policiais o sucedido e solicitar o auto de ocorrência. Em caso de desaparecimento da viatura, o Segurador só o indemnizará se passados 60 dias da data de participação do Furto e Roubo, o veículo não tiver sido encontrado.',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(6,1,_binary '\0','INCE','Incêndio','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(7,1,_binary '\0','RINC','Raio ou Explosão','Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. ',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(8,1,_binary '\0','QISV','Quebra Isolada de Vidros','Incluem-se danos, em virtude de quebra isolada dos vidros, para-brisas, óculo traseiro e vidros laterais, causados por causa não compreendida, em qualquer outra cobertura. ',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(9,1,_binary '\0','FNAT','Fenómenos da Natureza','- Ação de greves, tumultos, motins e alterações da ordem pública;- Atos de vandalismo, terrorismo e sabotagem;- Ação direta de trombas de água, chuvas torrenciais, enxurradas e aluimento de terras;',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(10,1,_binary '\0','GREV','Greves','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(11,1,_binary '\0','TUOP','Tumultos e Alterações da Ordem Pública','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(12,1,_binary '\0','PUSO','Privação de Uso','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38'),(13,1,_binary '\0','OCPV','Ocupantes da Viatura','',NULL,NULL,NULL,0.00,0.00,'2023-11-10 08:29:38','2023-11-10 09:29:38');
/*!40000 ALTER TABLE `cobertura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,1,1,'Pedro Nuno Santos','1962-07-02','M','003466243LA35','003466243LA35','S',NULL,NULL),(2,1,2,'Andre Vieira','1977-11-06','M','004556243LA24','004556243LA24','C',NULL,NULL),(3,1,3,'Maria Miguel','1986-04-12','F','005674243LA33','005674243LA33','C',NULL,NULL),(4,1,4,'Alexandre Vicente','1988-03-24','M','002556243LA22','002556243LA22','C',NULL,NULL),(5,1,5,'Talita Aleixo','1990-01-07','F','005236243LA03','005236243LA03','S',NULL,NULL),(6,1,15,'Daniel Moniz','1991-07-05','M','009043898183LA93','00380819273KAH','C','2023-12-05 10:38:32','2023-12-05 10:38:32'),(7,1,16,'Pedro Duarte','1984-06-05','M','009043898183LA91','00380819273KAH21','S','2023-12-05 10:42:25','2023-12-05 10:42:25');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pessoa_endereco`
--

LOCK TABLES `pessoa_endereco` WRITE;
/*!40000 ALTER TABLE `pessoa_endereco` DISABLE KEYS */;
INSERT INTO `pessoa_endereco` VALUES (1,'933000300','933000301','psantos@infoco.ao','Talatona','Luanda','Luanda','2023-11-15 20:56:34','2023-11-15 21:56:34'),(2,'944000400','944000401','avieira@infoco.ao','Boa fé','Luanda','Luanda','2023-11-15 21:02:16','2023-11-15 22:02:16'),(3,'955000500','955000501','mmiguel@infoco.ao','Luanda Sul','Luanda','Luanda','2023-11-15 21:02:16','2023-11-15 22:02:16'),(4,'966000600','966000601','avicente@infoco.ao','Dangereux','Luanda','Luanda','2023-11-15 21:02:17','2023-11-15 22:02:17'),(5,'977000700','966000701','taleixo@infoco.ao','Camama','Luanda','Luanda','2023-11-15 21:02:17','2023-11-15 22:02:17'),(6,'928742774','928742774','danimoniz@infoco.ao','Nova Vida','Luanda','Luanda','2023-11-27 07:29:37','2023-11-27 07:29:37'),(12,'933874821','933874821','daniel@infoco.ao','Talatona','Luanda','Luanda','2023-11-28 23:19:17','2023-11-28 23:19:17'),(13,NULL,NULL,NULL,NULL,NULL,NULL,'2023-12-05 10:36:27','2023-12-05 10:36:27'),(14,NULL,NULL,NULL,NULL,NULL,NULL,'2023-12-05 10:37:46','2023-12-05 10:37:46'),(15,NULL,NULL,NULL,NULL,NULL,NULL,'2023-12-05 10:38:32','2023-12-05 10:38:32'),(16,'+244 928742774','+244 928742774','pedro@gmail.com','Nova Vida','Luanda','Luanda','2023-12-05 10:42:25','2023-12-05 10:42:25');
/*!40000 ALTER TABLE `pessoa_endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pessoa_tipo`
--

LOCK TABLES `pessoa_tipo` WRITE;
/*!40000 ALTER TABLE `pessoa_tipo` DISABLE KEYS */;
INSERT INTO `pessoa_tipo` VALUES (1,'Pessoa Física','2023-11-10 08:29:37','2023-11-10 09:29:37'),(2,'Pessoa Jurídica','2023-11-10 08:29:37','2023-11-10 09:29:37');
/*!40000 ALTER TABLE `pessoa_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `preco_cilindrada`
--

LOCK TABLES `preco_cilindrada` WRITE;
/*!40000 ALTER TABLE `preco_cilindrada` DISABLE KEYS */;
INSERT INTO `preco_cilindrada` VALUES (15,'Ligeiro Particular',0,1,6351.00,12582.00,24923.00,0,0,1300,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(16,'Camioneta Particular',0,2,20380.00,40374.00,79976.00,0,0,1300,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(17,'Camioneta Particular',0,2,24241.00,48024.00,95130.00,3600,0,2500,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(18,'Auto Caravana',9,3,14553.00,28832.00,57112.00,0,0,1600,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(19,'Auto Caravana',9,3,18919.00,37481.00,74246.00,0,0,2500,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(20,'Camião Particular',0,4,14553.00,28832.00,57112.00,10000,1500,0,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47'),(21,'Camião Particular',0,4,37089.00,73477.00,145551.00,10000,0,1500,NULL,NULL,'2023-11-10 08:34:47','2023-11-10 09:34:47');
/*!40000 ALTER TABLE `preco_cilindrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `seguradora`
--

LOCK TABLES `seguradora` WRITE;
/*!40000 ALTER TABLE `seguradora` DISABLE KEYS */;
INSERT INTO `seguradora` VALUES (1,'5417588962','Ingombotas - Rua da Missão nº 79 | Luanda','geral@giantseguros.co.ao','929280828','929280602','www.giantseguros.ao','2023-11-10 09:29:38',NULL);
/*!40000 ALTER TABLE `seguradora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
INSERT INTO `veiculo` VALUES (1,1,'LD-14-24-88','Kia','K7',2020,6700000.00,2354,4,2018,5212,'2832632BMVSV03','Simples descrição do veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(2,1,'LD-10-10-AA','Kia','Soul',2012,5000000.00,2400,5,2014,1200,'98543KDSGH5','Bom Veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(3,2,'LD-00-22-FG','Toyota','Land Cruiser',2017,20000000.00,3000,8,2017,3000,'KJDFGH87534','Bom Veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(4,1,'LD-14-24-AD','Kia','Morning',2020,6700000.00,2354,4,2018,5212,'2832632BMVSV03','Simples descrição do veiculo',NULL,NULL,NULL,NULL,NULL,NULL),(5,1,'LD-02-04-20','Hyundai','i10',2023,234213.00,289210,4,2016,21324,'82847HK8273','Carro frágil',NULL,NULL,NULL,NULL,NULL,NULL),(6,1,'LD-29-94-00','Porsche','Cayenne',2022,90000.00,289210,7,2017,21324,'82847HK8273','Carro frágil',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `veiculo` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05 13:50:30
