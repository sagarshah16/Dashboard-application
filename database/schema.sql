-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 02, 2016 at 03:47 PM
-- Server version: 5.6.28
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `aiuto`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `Id` int(11) NOT NULL,
  `First_Name` varchar(50) NOT NULL,
  `Last_Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,


  `Hire_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`Id`, `First_Name`, `Last_Name`, `Email`, `Hire_Date`) VALUES
(36, 'sagar', 'shahsfhwefwoefwef', 'erfer@gmalo.svelrve', '2016-11-01'),
(38, 'sagar', 'shah', 'erfer@gmalo.svelrv', '2015-10-31'),
(39, 'krupa', 'shah', 'krupa@gmail.com', '2016-11-01'),
(40, 'sagar', 'shah', 'erfer@gmalo.svelrv', '2016-11-01'),
(41, 'krupa', 'shah', 'krupa@gmail.com', '2016-11-01'),
(42, 'sagar', 'shah', 'erfer@gmalo.svelrv', '2016-11-01'),
(43, 'krupa', 'shah', 'krupa@gmail.com', '2016-11-01'),
(44, 'sagar', 'shah', 'erfer@gmalo.svelrv', '2015-11-01'),
(45, 'krupa', 'shah', 'krupa@gmail.com', '2015-11-01'),
(46, 'sagar', 'shah', 'erfer@gmalo.svelrv', '2014-11-01'),
(47, 'krupa', 'shah', 'krupa@gmail.com', '2014-11-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;