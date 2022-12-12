-- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for osx10.17 (arm64)
--
-- Host: localhost    Database: wild_library
-- ------------------------------------------------------
-- Server version	10.7.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `isbn` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES
(1,'Romper Stomper','342937785-4'),
(2,'Dedication','977117080-5'),
(3,'Mountains of the Moon','290867347-9'),
(4,'In Time','438497756-5'),
(5,'Paradise','127523346-5'),
(6,'Sense & Sensibility','596400392-3'),
(7,'Total Recall','559927357-1'),
(8,'Animal Factory','815553948-2'),
(9,'Two Sisters from Boston','794976305-1'),
(10,'Extreme Days','657618608-8'),
(11,'Tali-Ihantala 1944','148418410-6'),
(12,'Precision: The Measure of All Things','721850705-0'),
(13,'Work of Director Michel Gondry, The','807864577-5'),
(14,'Zeitgeist: The Movie','572702512-5'),
(15,'Read My Lips (Sur mes lèvres)','891130039-X'),
(16,'Rain or Shine','285596606-X'),
(17,'Journey from the Fall','428570830-2'),
(18,'Housekeeper, The (femme de ménage, Une)','105552574-2'),
(19,'Speedway','426374042-4'),
(20,'Planet of Snail','155497603-0'),
(21,'The Left Handed Gun','433789805-0'),
(22,'Little Accidents','555551136-1'),
(23,'Halloween H20: 20 Years Later (Halloween 7: The Revenge of Laurie Strode)','334355979-2'),
(24,'All the Way Home','304119709-X'),
(25,'Wall, The (Die Wand)','826123899-7'),
(26,'Family Thing, A','940136800-7'),
(27,'My Stars (Mes stars et moi)','418573148-5'),
(28,'Almost Famous','572736035-8'),
(29,'Combat Girls (Kriegerin)','587177067-3'),
(30,'Sour Grapes','905936665-4'),
(31,'Maniac','133520601-9'),
(32,'Robin Williams: Weapons of Self Destruction','781246407-5'),
(33,'Back to the Future Part III','354137588-4'),
(34,'Surfwise','103866690-2'),
(35,'So Dear to My Heart','108591647-2'),
(36,'Cutie Honey','273295408-X'),
(37,'Wanderlust','800459663-0'),
(38,'Mrs. Dalloway','561856156-5'),
(39,'In Country','052352588-5'),
(40,'World Moves On, The','607081757-5'),
(41,'Cat and the Canary, The','050495006-1'),
(42,'Ruby & Quentin (Tais-toi!)','096748663-7'),
(43,'Shameless (Maskeblomstfamilien )','372387732-X'),
(44,'Coming Down the Mountain','205900310-5'),
(45,'Uprising','359076428-7'),
(46,'Blindsight','310490026-4'),
(47,'Summer Wishes, Winter Dreams','654513494-9'),
(48,'Trouble with Harry, The','815287905-3'),
(49,'In the Name of the Law','314841839-5'),
(50,'Needing You... (Goo naam gwa neui)','714332068-4');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31 11:55:38
