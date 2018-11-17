-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2018 at 10:25 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28


--
-- Database: `cissa`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `price` varchar(40) NOT NULL,
  `quantity` text NOT NULL,
  `img_url` text NOT NULL,
  `availability` varchar(40) NOT NULL,
  `product_id` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `quantity`, `img_url`, `availability`, `product_id`) VALUES
(1, 'Carrot', '40', '', 'https://i5.walmartimages.ca/images/Large/832/497/6000196832497.jpg', 'true', 'PRO123'),
(2, 'tomato', '25', '[500g, 1kg]', 'https://i5.walmartimages.ca/images/Large/832/497/6000196832497.jpg', 'true', 'PRO123'),
(3, 'potato', '30', '[500g, 1kg]', 'https://i5.walmartimages.ca/images/Large/832/497/6000196832497.jpg', 'true', 'PRO40767393222');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
