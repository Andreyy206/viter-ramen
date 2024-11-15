-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 08:47 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ramen_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `ramen_dessert`
--

CREATE TABLE `ramen_dessert` (
  `dessert_aid` int(11) NOT NULL,
  `dessert_title` varchar(50) NOT NULL,
  `dessert_price` varchar(10) NOT NULL,
  `dessert_description` varchar(20) NOT NULL,
  `dessert_is_active` tinyint(1) NOT NULL,
  `dessert_datetime` varchar(20) NOT NULL,
  `dessert_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_dessert`
--

INSERT INTO `ramen_dessert` (`dessert_aid`, `dessert_title`, `dessert_price`, `dessert_description`, `dessert_is_active`, `dessert_datetime`, `dessert_created`) VALUES
(5, 'Ube Halaya', '50', 'Ube', 1, '2024-11-11 11:24:39', '2024-11-11 11:24:39'),
(6, 'EDAMAME', '250', 'Salted Egg', 1, '2024-11-11 11:26:25', '2024-11-11 11:26:25'),
(7, 'SEAWOOD SALAD', '370', 'Salad', 1, '2024-11-11 11:27:08', '2024-11-11 11:27:08'),
(8, 'CALAMARI SALAD', '230', 'Salad', 1, '2024-11-11 11:27:39', '2024-11-11 11:27:39'),
(9, 'GYOZA', '290', 'Squid', 1, '2024-11-11 11:28:05', '2024-11-11 11:28:05'),
(10, 'VEGGIES', '48', 'Cabbage', 1, '2024-11-11 11:32:22', '2024-11-11 11:32:22');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_drinks`
--

CREATE TABLE `ramen_drinks` (
  `drinks_aid` int(11) NOT NULL,
  `drinks_title` varchar(50) NOT NULL,
  `drinks_price` varchar(20) NOT NULL,
  `drinks_description` text NOT NULL,
  `drinks_category` varchar(50) NOT NULL,
  `drinks_is_active` tinyint(1) NOT NULL,
  `drinks_datetime` varchar(20) NOT NULL,
  `drinks_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_drinks`
--

INSERT INTO `ramen_drinks` (`drinks_aid`, `drinks_title`, `drinks_price`, `drinks_description`, `drinks_category`, `drinks_is_active`, `drinks_datetime`, `drinks_created`) VALUES
(14, 'Redhorse', '150', 'Extrastrong', 'Beer', 1, '2024-11-08 08:03:42', '2024-11-07 10:26:01'),
(19, 'Tea', '160', 'Tea', 'Tea', 1, '2024-11-08 08:03:51', '2024-11-08 07:37:14'),
(20, 'Sake', '234', 'sdfasdfsa', 'Sake', 1, '2024-11-08 08:03:47', '2024-11-08 07:37:33'),
(21, 'RedWine', '1500', 'saefsdf', 'Wine', 1, '2024-11-08 08:03:28', '2024-11-08 07:51:19'),
(22, 'San Miguel  Apple', '60', 'add', 'Beer', 1, '2024-11-08 08:05:08', '2024-11-08 08:05:08'),
(23, 'MariaClara', '500', 'asdsad', 'Wine', 1, '2024-11-08 08:05:45', '2024-11-08 08:05:45');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_ramen`
--

CREATE TABLE `ramen_ramen` (
  `ramen_aid` int(11) NOT NULL,
  `ramen_title` varchar(50) NOT NULL,
  `ramen_price` varchar(10) NOT NULL,
  `ramen_description` text NOT NULL,
  `ramen_category` varchar(50) NOT NULL,
  `ramen_photo` varchar(20) NOT NULL,
  `ramen_is_active` tinyint(1) NOT NULL,
  `ramen_datetime` varchar(20) NOT NULL,
  `ramen_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_ramen`
--

INSERT INTO `ramen_ramen` (`ramen_aid`, `ramen_title`, `ramen_price`, `ramen_description`, `ramen_category`, `ramen_photo`, `ramen_is_active`, `ramen_datetime`, `ramen_created`) VALUES
(7, 'MICHI', '150', 'Chashu slices', 'Shoyu Tonkatsu', 'menu-7.webp', 1, '2024-11-11 11:35:08', '2024-11-11 11:35:08'),
(8, 'SAPPORO', '160', 'Green Onions', 'Miso Tonkotso', 'menu-4.webp', 1, '2024-11-11 11:37:49', '2024-11-11 11:37:49'),
(9, 'VEGGIE', '170', 'Shooyu Shiitake', 'Chives', 'banner.webp', 1, '2024-11-11 11:38:41', '2024-11-11 11:38:41'),
(10, 'Meat Lovers', '180', 'Shoyo Tonkotsu', 'Mayu Oil', 'slider-6.webp', 1, '2024-11-11 11:39:33', '2024-11-11 11:39:33');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_settings_category`
--

CREATE TABLE `ramen_settings_category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_settings_category`
--

INSERT INTO `ramen_settings_category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(3, 'sdsddssss', 1, '2024-11-06 14:27:00', '2024-11-06 14:12:13'),
(4, 'dfdfd', 1, '2024-11-06 14:26:33', '2024-11-06 14:12:19'),
(5, 'dsdsds', 1, '2024-11-06 14:13:24', '2024-11-06 14:13:24'),
(6, 'sdsdasS', 1, '2024-11-06 14:13:27', '2024-11-06 14:13:27'),
(7, 'sdasdsa', 1, '2024-11-06 14:16:21', '2024-11-06 14:16:21'),
(8, 'dsadsaas', 1, '2024-11-06 14:16:25', '2024-11-06 14:16:25'),
(9, 'sdfsdfsdc', 1, '2024-11-06 14:37:35', '2024-11-06 14:37:35');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_settings_mop`
--

CREATE TABLE `ramen_settings_mop` (
  `mop_aid` int(11) NOT NULL,
  `mop_title` varchar(50) NOT NULL,
  `mop_is_active` tinyint(1) NOT NULL,
  `mop_datetime` varchar(20) NOT NULL,
  `mop_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_settings_mop`
--

INSERT INTO `ramen_settings_mop` (`mop_aid`, `mop_title`, `mop_is_active`, `mop_datetime`, `mop_created`) VALUES
(3, 'pppppppp', 0, '2024-11-11 09:45:49', '2024-11-06 14:29:05'),
(4, 'dsasddas', 0, '2024-11-11 09:45:51', '2024-11-06 14:29:08'),
(5, 'sdasdsa', 0, '2024-11-11 09:45:47', '2024-11-06 14:36:23'),
(6, 'dfdfvdv', 0, '2024-11-11 09:46:01', '2024-11-06 14:37:39'),
(7, 'Gcash', 1, '2024-11-11 09:47:13', '2024-11-11 09:47:13');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_settings_promo`
--

CREATE TABLE `ramen_settings_promo` (
  `promo_aid` int(11) NOT NULL,
  `promo_title` varchar(50) NOT NULL,
  `promo_is_active` tinyint(1) NOT NULL,
  `promo_datetime` varchar(20) NOT NULL,
  `promo_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ramen_toppings`
--

CREATE TABLE `ramen_toppings` (
  `toppings_aid` int(11) NOT NULL,
  `toppings_title` varchar(50) NOT NULL,
  `toppings_price` varchar(10) NOT NULL,
  `toppings_description` text NOT NULL,
  `toppings_is_active` tinyint(1) NOT NULL,
  `toppings_datetime` varchar(20) NOT NULL,
  `toppings_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_toppings`
--

INSERT INTO `ramen_toppings` (`toppings_aid`, `toppings_title`, `toppings_price`, `toppings_description`, `toppings_is_active`, `toppings_datetime`, `toppings_created`) VALUES
(6, 'AJITAMA', '50', 'Boiled Egg', 1, '2024-11-11 11:29:34', '2024-11-11 11:29:34'),
(7, 'ONSEN', '60', 'Hot spring egg', 1, '2024-11-11 11:30:13', '2024-11-11 11:30:13'),
(8, 'CHASU PORK', '145', 'Pork', 1, '2024-11-11 11:30:34', '2024-11-11 11:30:34');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_transaction`
--

CREATE TABLE `ramen_transaction` (
  `transaction_aid` int(11) NOT NULL,
  `transaction_cart_dessertCart` text NOT NULL,
  `transaction_cart_drinks` text NOT NULL,
  `transaction_cart_ramen` text NOT NULL,
  `transaction_cart_toppings` text NOT NULL,
  `transaction_change` int(20) NOT NULL,
  `transaction_mop` varchar(20) NOT NULL,
  `transaction_payment` int(10) NOT NULL,
  `transaction_subtotal` int(10) NOT NULL,
  `transaction_finaltotal` int(10) NOT NULL,
  `transaction_is_active` tinyint(1) NOT NULL,
  `transaction_datetime` varchar(20) NOT NULL,
  `transaction_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_transaction`
--

INSERT INTO `ramen_transaction` (`transaction_aid`, `transaction_cart_dessertCart`, `transaction_cart_drinks`, `transaction_cart_ramen`, `transaction_cart_toppings`, `transaction_change`, `transaction_mop`, `transaction_payment`, `transaction_subtotal`, `transaction_finaltotal`, `transaction_is_active`, `transaction_datetime`, `transaction_created`) VALUES
(1, '[]', '[{\"drinks_aid\":14,\"drinks_title\":\"Redhorse\",\"drinks_price\":\"150\",\"drinks_description\":\"Extrastrong\",\"drinks_category\":\"Beer\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-08 08:03:42\",\"drinks_created\":\"2024-11-07 10:26:01\",\"quantity\":1},{\"drinks_aid\":20,\"drinks_title\":\"Sake\",\"drinks_price\":\"234\",\"drinks_description\":\"sdfasdfsa\",\"drinks_category\":\"Sake\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-08 08:03:47\",\"drinks_created\":\"2024-11-08 07:37:33\",\"quantity\":2},{\"drinks_aid\":23,\"drinks_title\":\"MariaClara\",\"drinks_price\":\"500\",\"drinks_description\":\"asdsad\",\"drinks_category\":\"Wine\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-08 08:05:45\",\"drinks_created\":\"2024-11-08 08:05:45\",\"quantity\":2}]', '[{\"ramen_aid\":2,\"ramen_title\":\"Tonkatsu\",\"ramen_price\":\"123\",\"ramen_description\":\"fdasfd\",\"ramen_category\":\"dgfvdsf\",\"ramen_photo\":\"menu-1.webp\",\"ramen_is_active\":1,\"ramen_datetime\":\"2024-11-07 15:24:17\",\"ramen_created\":\"2024-11-07 15:24:17\",\"quantity\":1}]', '[]', 224, 'Gcash', 2000, 1741, 1776, 1, '2024-11-11 10:26:24', '2024-11-11 10:26:24'),
(2, '[]', '[{\"drinks_aid\":14,\"drinks_title\":\"Redhorse\",\"drinks_price\":\"150\",\"drinks_description\":\"Extrastrong\",\"drinks_category\":\"Beer\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-08 08:03:42\",\"drinks_created\":\"2024-11-07 10:26:01\",\"quantity\":1}]', '[{\"ramen_aid\":7,\"ramen_title\":\"MICHI\",\"ramen_price\":\"150\",\"ramen_description\":\"Chashu slices\",\"ramen_category\":\"Shoyu Tonkatsu\",\"ramen_photo\":\"menu-7.webp\",\"ramen_is_active\":1,\"ramen_datetime\":\"2024-11-11 11:35:08\",\"ramen_created\":\"2024-11-11 11:35:08\",\"quantity\":1}]', '[{\"toppings_aid\":8,\"toppings_title\":\"CHASU PORK\",\"toppings_price\":\"145\",\"toppings_description\":\"Pork\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-11 11:30:34\",\"toppings_created\":\"2024-11-11 11:30:34\",\"quantity\":1},{\"toppings_aid\":6,\"toppings_title\":\"AJITAMA\",\"toppings_price\":\"50\",\"toppings_description\":\"Boiled Egg\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-11 11:29:34\",\"toppings_created\":\"2024-11-11 11:29:34\",\"quantity\":1}]', 95, 'Gcash', 600, 495, 505, 1, '2024-11-11 13:22:30', '2024-11-11 13:22:30'),
(3, '[]', '[]', '[{\"ramen_aid\":7,\"ramen_title\":\"MICHI\",\"ramen_price\":\"150\",\"ramen_description\":\"Chashu slices\",\"ramen_category\":\"Shoyu Tonkatsu\",\"ramen_photo\":\"menu-7.webp\",\"ramen_is_active\":1,\"ramen_datetime\":\"2024-11-11 11:35:08\",\"ramen_created\":\"2024-11-11 11:35:08\",\"quantity\":1}]', '[{\"toppings_aid\":8,\"toppings_title\":\"CHASU PORK\",\"toppings_price\":\"145\",\"toppings_description\":\"Pork\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-11 11:30:34\",\"toppings_created\":\"2024-11-11 11:30:34\",\"quantity\":1}]', 699, 'Gcash', 1000, 295, 301, 1, '2024-11-11 13:23:47', '2024-11-11 13:23:47'),
(4, '[]', '[{\"drinks_aid\":23,\"drinks_title\":\"MariaClara\",\"drinks_price\":\"500\",\"drinks_description\":\"asdsad\",\"drinks_category\":\"Wine\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-08 08:05:45\",\"drinks_created\":\"2024-11-08 08:05:45\",\"quantity\":1},{\"drinks_aid\":21,\"drinks_title\":\"RedWine\",\"drinks_price\":\"1500\",\"drinks_description\":\"saefsdf\",\"drinks_category\":\"Wine\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-08 08:03:28\",\"drinks_created\":\"2024-11-08 07:51:19\",\"quantity\":1}]', '[{\"ramen_aid\":7,\"ramen_title\":\"MICHI\",\"ramen_price\":\"150\",\"ramen_description\":\"Chashu slices\",\"ramen_category\":\"Shoyu Tonkatsu\",\"ramen_photo\":\"menu-7.webp\",\"ramen_is_active\":1,\"ramen_datetime\":\"2024-11-11 11:35:08\",\"ramen_created\":\"2024-11-11 11:35:08\",\"quantity\":2},{\"ramen_aid\":8,\"ramen_title\":\"SAPPORO\",\"ramen_price\":\"160\",\"ramen_description\":\"Green Onions\",\"ramen_category\":\"Miso Tonkotso\",\"ramen_photo\":\"menu-4.webp\",\"ramen_is_active\":1,\"ramen_datetime\":\"2024-11-11 11:37:49\",\"ramen_created\":\"2024-11-11 11:37:49\",\"quantity\":1}]', '[{\"toppings_aid\":8,\"toppings_title\":\"CHASU PORK\",\"toppings_price\":\"145\",\"toppings_description\":\"Pork\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-11 11:30:34\",\"toppings_created\":\"2024-11-11 11:30:34\",\"quantity\":2},{\"toppings_aid\":6,\"toppings_title\":\"AJITAMA\",\"toppings_price\":\"50\",\"toppings_description\":\"Boiled Egg\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-11 11:29:34\",\"toppings_created\":\"2024-11-11 11:29:34\",\"quantity\":2},{\"toppings_aid\":7,\"toppings_title\":\"ONSEN\",\"toppings_price\":\"60\",\"toppings_description\":\"Hot spring egg\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-11 11:30:13\",\"toppings_created\":\"2024-11-11 11:30:13\",\"quantity\":1}]', 1032, 'Gcash', 4000, 2910, 2968, 1, '2024-11-11 13:30:51', '2024-11-11 13:30:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ramen_dessert`
--
ALTER TABLE `ramen_dessert`
  ADD PRIMARY KEY (`dessert_aid`);

--
-- Indexes for table `ramen_drinks`
--
ALTER TABLE `ramen_drinks`
  ADD PRIMARY KEY (`drinks_aid`);

--
-- Indexes for table `ramen_ramen`
--
ALTER TABLE `ramen_ramen`
  ADD PRIMARY KEY (`ramen_aid`);

--
-- Indexes for table `ramen_settings_category`
--
ALTER TABLE `ramen_settings_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `ramen_settings_mop`
--
ALTER TABLE `ramen_settings_mop`
  ADD PRIMARY KEY (`mop_aid`);

--
-- Indexes for table `ramen_settings_promo`
--
ALTER TABLE `ramen_settings_promo`
  ADD PRIMARY KEY (`promo_aid`);

--
-- Indexes for table `ramen_toppings`
--
ALTER TABLE `ramen_toppings`
  ADD PRIMARY KEY (`toppings_aid`);

--
-- Indexes for table `ramen_transaction`
--
ALTER TABLE `ramen_transaction`
  ADD PRIMARY KEY (`transaction_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ramen_dessert`
--
ALTER TABLE `ramen_dessert`
  MODIFY `dessert_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ramen_drinks`
--
ALTER TABLE `ramen_drinks`
  MODIFY `drinks_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `ramen_ramen`
--
ALTER TABLE `ramen_ramen`
  MODIFY `ramen_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ramen_settings_category`
--
ALTER TABLE `ramen_settings_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ramen_settings_mop`
--
ALTER TABLE `ramen_settings_mop`
  MODIFY `mop_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ramen_settings_promo`
--
ALTER TABLE `ramen_settings_promo`
  MODIFY `promo_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ramen_toppings`
--
ALTER TABLE `ramen_toppings`
  MODIFY `toppings_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ramen_transaction`
--
ALTER TABLE `ramen_transaction`
  MODIFY `transaction_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
