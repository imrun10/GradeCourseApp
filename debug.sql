-- GradingSystem.Course definition

CREATE TABLE `Course` (
  `course_code` varchar(10) NOT NULL,
  `course_name` text,
  PRIMARY KEY (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.Faculty definition

CREATE TABLE `Faculty` (
  `faculty_id` varchar(10) NOT NULL,
  `faculty_fname` text,
  `faculty_lname` text,
  PRIMARY KEY (`faculty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.Student definition

CREATE TABLE `Student` (
  `student_id` varchar(10) NOT NULL,
  `student_fname` text,
  `student_lname` text,
  `gpa` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.Users definition

CREATE TABLE `Users` (
  `FirstName` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `PriorityLevel` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `Users_UN` (`email`),
  UNIQUE KEY `password` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.Assignments definition

CREATE TABLE `Assignments` (
  `student_id` varchar(10) DEFAULT NULL,
  `quiz_1` int(100) DEFAULT NULL,
  `quiz_2` int(100) DEFAULT NULL,
  `quiz_3` int(100) DEFAULT NULL,
  `quiz_4` int(100) DEFAULT NULL,
  `homework_1` int(100) DEFAULT NULL,
  `homework_2` int(100) DEFAULT NULL,
  `midterm` int(100) DEFAULT NULL,
  `exam` int(100) DEFAULT NULL,
  `course_code` varchar(10) DEFAULT NULL,
  KEY `student_id` (`student_id`),
  KEY `course_code` (`course_code`),
  CONSTRAINT `assignments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`),
  CONSTRAINT `assignments_ibfk_3` FOREIGN KEY (`course_code`) REFERENCES `Course` (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.CourseSection definition

CREATE TABLE `CourseSection` (
  `section_id` int(11) NOT NULL,
  `course_code` varchar(10) DEFAULT NULL,
  `instructor` varchar(10) DEFAULT NULL,
  `semester` text,
  PRIMARY KEY (`section_id`),
  KEY `course_code` (`course_code`),
  KEY `instructor` (`instructor`),
  CONSTRAINT `coursesection_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `Course` (`course_code`),
  CONSTRAINT `coursesection_ibfk_2` FOREIGN KEY (`instructor`) REFERENCES `Faculty` (`faculty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.StudentSection definition

CREATE TABLE `StudentSection` (
  `student_section_id` int(11) NOT NULL,
  `student_id` varchar(10) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`student_section_id`),
  KEY `student_id` (`student_id`),
  KEY `section_id` (`section_id`),
  CONSTRAINT `studentsection_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`),
  CONSTRAINT `studentsection_ibfk_2` FOREIGN KEY (`section_id`) REFERENCES `CourseSection` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.CourseAssignment definition

CREATE TABLE `CourseAssignment` (
  `assignment_id` int(11) NOT NULL,
  `section_id` int(11) DEFAULT NULL,
  `assignment_name` text,
  `assignment_weight` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`assignment_id`),
  KEY `section_id` (`section_id`),
  CONSTRAINT `courseassignment_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `CourseSection` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- GradingSystem.StudentGrade definition

CREATE TABLE `StudentGrade` (
  `student_grade_id` int(11) NOT NULL,
  `assignment_id` int(11) DEFAULT NULL,
  `student_id` varchar(10) DEFAULT NULL,
  `grade` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`student_grade_id`),
  KEY `student_id` (`student_id`),
  KEY `assignment_id` (`assignment_id`),
  CONSTRAINT `studentgrade_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`),
  CONSTRAINT `studentgrade_ibfk_2` FOREIGN KEY (`assignment_id`) REFERENCES `CourseAssignment` (`assignment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;