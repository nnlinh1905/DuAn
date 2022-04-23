-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th4 03, 2022 lúc 06:45 AM
-- Phiên bản máy phục vụ: 5.7.33
-- Phiên bản PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+07:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nienluan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `allcodes`
--
-- Tạo: Th3 22, 2022 lúc 07:22 AM
--

CREATE TABLE `allcodes` (
  `ID` int(11) NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `valueEn` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `valueVi` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `allcodes`
--

INSERT INTO `allcodes` (`ID`, `keyMap`, `type`, `valueEn`, `valueVi`, `createdAt`, `updatedAt`) VALUES
(1, 'GV', 'ROLE', 'Teacher', 'Giáo Viên', NULL, NULL),
(2, 'HS', 'ROLE', 'Student', 'Học sinh', NULL, NULL),
(3, 'AD', 'ROLE', 'Admin', 'Quản Trị Viên', NULL, NULL),
(4, 'NAM', 'GENDER', 'Male', 'Nam', NULL, NULL),
(5, 'NU', 'GENDER', 'Femele', 'Nữ', NULL, NULL),
(6, 'KHAC', 'GENDER', 'Other', 'Giới Tính Khác', NULL, NULL),
(7, '2021', 'YEAR', '2020-2021', '2020-2021', NULL, NULL),
(9, '2122', 'YEAR', '2021-2022', '2021-2022', NULL, NULL),
(11, '10A', 'CLASS', '10A', '10A', NULL, NULL),
(12, '10B', 'CLASS', '10B', '10B', NULL, NULL),
(13, '10C', 'CLASS', '10C', '10C', NULL, NULL),
(14, '11A', 'CLASS', '11A', '11A', NULL, NULL),
(15, '11B', 'CLASS', '11B', '11B', NULL, NULL),
(16, '11C', 'CLASS', '11C', '11C', NULL, NULL),
(17, '12A', 'CLASS', '12A', '12A', NULL, NULL),
(18, '12B', 'CLASS', '12B', '12B', NULL, NULL),
(19, '12C', 'CLASS', '12C', '12C', NULL, NULL),
(20, 'PG', 'RELIGION', 'Buddhism', 'Phật Giáo', NULL, NULL),
(21, 'TCG', 'RELIGION', 'Catholic', 'Thiên Chúa Giáo', NULL, NULL),
(22, 'TL', 'RELIGION', 'Protestantism', 'Tin Lành', NULL, NULL),
(23, 'CD', 'RELIGION', 'Caodaism', 'Cao Đài', NULL, NULL),
(24, 'HH', 'RELIGION', 'Hoa Hao', 'Hòa Hảo', NULL, NULL),
(25, 'ADG', 'RELIGION', 'Hinduism', 'Ấn Độ Giáo', NULL, NULL),
(26, 'HG', 'RELIGION', 'Islamic', 'Hồi Giáo', NULL, NULL),
(27, 'OD', 'RELIGION', 'Other Religions', 'Tôn Giáo Khác', NULL, NULL),
(28, 'HK1', 'SEMESTER', 'Semester 1', 'Học Kỳ 1', NULL, NULL),
(29, 'HK2', 'SEMESTER', 'Semester 2', 'Học Kỳ 2', NULL, NULL),
(30, 'TOAN', 'MONHOC', 'Math', 'Toán', NULL, NULL),
(31, 'VAN', 'MONHOC', 'Literature', 'Ngữ Văn', NULL, NULL),
(32, 'ANH', 'MONHOC', 'English', 'Anh Văn', NULL, NULL),
(33, 'LY', 'MONHOC', 'Physics', 'Vật Lý', NULL, NULL),
(34, 'HOA', 'MONHOC', 'Chemistry', 'Hóa Học', NULL, NULL),
(35, 'SINH', 'MONHOC', 'Biology', 'Sinh Học', NULL, NULL),
(36, 'DIA', 'MONHOC', 'Geography', 'Địa Lý', NULL, NULL),
(37, 'SU', 'MONHOC', 'History', 'Lịch Sữ', NULL, NULL),
(38, 'GDCD', 'MONHOC', 'Civic Education', 'Giáo Dục Công Dân', NULL, NULL),
(39, 'TDUC', 'MONHOC', 'Exercise', 'Thể Dục', NULL, NULL),
(40, 'CONG', 'MONHOC', 'Technology', 'Công Nghệ', NULL, NULL),
(41, 'TIN', 'MONHOC', 'Informatics', 'Tin Học', NULL, NULL),
(42, 'GDQP', 'MONHOC', 'Defense Education', 'Giáo Dục Quốc Phòng', NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `allcodes`
--
ALTER TABLE `allcodes`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `allcodes`
--
ALTER TABLE `allcodes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
