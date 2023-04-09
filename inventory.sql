-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2023 at 08:42 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--
CREATE DATABASE IF NOT EXISTS `inventory` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `inventory`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `stock` int(255) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `photo`, `stock`) VALUES
(1, 'update_Product', 'update', 'data.photo', 209),
(12, 'added product2', 'added product2', 'photo_1680580878480.jpg', 16);

-- --------------------------------------------------------

--
-- Table structure for table `product_warehouse`
--

DROP TABLE IF EXISTS `product_warehouse`;
CREATE TABLE IF NOT EXISTS `product_warehouse` (
  `product_id` int(255) NOT NULL,
  `warehouse_id` int(255) NOT NULL,
  `warehouse_stock` int(255) NOT NULL,
  KEY `product_id` (`product_id`),
  KEY `warehouse_id` (`warehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_warehouse`
--

INSERT INTO `product_warehouse` (`product_id`, `warehouse_id`, `warehouse_stock`) VALUES
(1, 4, 26),
(12, 4, 84),
(12, 3, 70),
(12, 3, 70),
(1, 4, 20);

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
CREATE TABLE IF NOT EXISTS `requests` (
  `request_id` int(255) NOT NULL AUTO_INCREMENT,
  `supervisor_id` int(255) NOT NULL,
  `product_id` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `date` varchar(255) NOT NULL,
  `request_type` varchar(255) NOT NULL,
  PRIMARY KEY (`request_id`),
  KEY `make_by` (`supervisor_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`request_id`, `supervisor_id`, `product_id`, `quantity`, `status`, `date`, `request_type`) VALUES
(20, 2, 1, 1, 'accept', '04/04/2023', 'decrement'),
(22, 2, 1, 3, 'accept', '08/04/2023', 'increment'),
(23, 3, 1, 3, 'accept', '08/04/2023', 'increment'),
(24, 2, 1, 3, 'accept', '08/04/2023', 'decrement'),
(25, 3, 1, 3, 'accept', '08/04/2023', 'increment'),
(26, 2, 1, 3, 'accept', '08/04/2023', 'increment'),
(27, 3, 12, 3, 'accept', '08/04/2023', 'decrement'),
(28, 2, 12, 3, 'pending', '08/04/2023', 'increment'),
(29, 2, 12, 3, 'accept', '08/04/2023', 'increment'),
(30, 3, 12, 4, 'accept', '08/04/2023', 'increment');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `phone`, `status`, `type`) VALUES
(1, 'admin@gmail.com', '123', '012343', 'online', 'admin'),
(2, 'super2@gmail.com', '12345', '01005345', 'online', 'supervisor'),
(3, 'super3@gmail.com', '123456', '09283', 'offline', 'supervisor');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
CREATE TABLE IF NOT EXISTS `warehouses` (
  `warehouse_id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `supervisor_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`warehouse_id`),
  KEY `supervisor_id` (`supervisor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`warehouse_id`, `name`, `location`, `status`, `supervisor_id`) VALUES
(1, 'warehouse1', 'cairo', 'online', 1),
(3, 'warehouse3', 'Haram', 'active', 3),
(4, 'new_warehouse44', 'Egypt', 'in-active', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_warehouse`
--
ALTER TABLE `product_warehouse`
  ADD CONSTRAINT `product_warehouse_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `product_warehouse_ibfk_2` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`warehouse_id`);

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `make_by` FOREIGN KEY (`supervisor_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD CONSTRAINT `warehouses_ibfk_1` FOREIGN KEY (`supervisor_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
