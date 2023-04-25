-- GradingSystem.Users definition

CREATE TABLE `Users` (
  `FirstName` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Password` varchar(150) NOT NULL,
  `PriorityLevel` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `Users_UN` (`email`),
  UNIQUE KEY `password` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;