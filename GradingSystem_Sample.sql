
CREATE DATABASE IF NOT EXISTS GradingSystem;
USE GradingSystem;

drop table if exists StudentGrade;
drop table if exists CourseAssignment;
drop table if exists StudentSection;
drop table if exists CourseSection;
drop table if exists Course;
drop table if exists Faculty;
drop table if exists Student;

CREATE TABLE Student(
    student_id varchar(10) PRIMARY KEY,
    student_fname text,
    student_lname text,
    gpa decimal
);

CREATE TABLE Faculty (
    faculty_id varchar(10) PRIMARY KEY,
    faculty_fname text,
    faculty_lname text
);

CREATE TABLE Course (
	course_code varchar(10) PRIMARY KEY,
	course_name text
);

CREATE TABLE CourseSection (
    section_id integer PRIMARY KEY,
    course_code varchar(10),
    instructor varchar(10),
    semester text,
    foreign key (course_code) references Course (course_code),
    foreign key (instructor) references Faculty (faculty_id)
);

create table StudentSection (
	student_section_id integer primary key not null,
	student_id varchar(10),
	section_id integer,
	foreign key (student_id) references Student (student_id),
	foreign key (section_id) references CourseSection (section_id)
);

CREATE TABLE CourseAssignment(
    assignment_id integer PRIMARY KEY NOT NULL,
    section_id integer,
    assignment_name text,
    assignment_weight decimal,
    foreign key (section_id) references CourseSection (section_id)
);

create table StudentGrade(
	student_grade_id integer primary key not null,
	assignment_id integer,
	student_id varchar(10),
	grade decimal,
	foreign key (student_id) references Student (student_id),
	foreign key (assignment_id) references CourseAssignment (assignment_id)
);

insert into Student values
('A00001', 'Student', '1', 3.0),
('A00002', 'Student', '2', 2.3),
('A00003', 'Student', '3', 3.5),
('A00004', 'John', 'Doe', 2.9);

insert into Faculty values
('000', 'Hasan', 'Kadhem'),
('001', 'Dimitrios', 'Pispinis'),
('002', 'Fatema', 'Akbar'),
('003', 'Sarah', 'Shono'),
('004', 'Raja', 'Ghozi'),
('005', 'Mustafa', 'Husain'),
('006', 'Haitham', 'Tayar'),
('007', 'Firstname', 'Lastname');

insert into Course values
('MATH151', 'Calculus 1'),
('MATH152', 'Calculus 2'),
('MATH205', 'Discrete Math'),
('ENGL101', 'Composition 1'),
('ENGL102', 'Composition 2'),
('CMPE270', 'Digital Systems'),
('CMPE271', 'Computer Organization'),
('COSC100', 'Intro to Computer Science and Networks'),
('CMPE160', 'Intro to Computer Programming and Applications'),
('COSC125', 'Data Structure and Programming Techniques'),
('COSC248', 'Algorithms and Complexity');

insert into CourseSection values
(0, 'COSC100', '000', 'Fall2023'), -- Hasan Kadhem
(1, 'CMPE160', '000', 'Fall2023'),
(2, 'CMPE270', '000', 'Fall2023'),
(3, 'COSC125', '002', 'Fall2023'), -- Fatema Akbar
(4, 'COSC248', '002', 'Fall2023'),
(5, 'MATH151', '001', 'Fall2023'), -- Dimitrios Pispinis
(6, 'MATH152', '001', 'Fall2023'),
(7, 'MATH205', '001', 'Fall2023');

insert into StudentSection values
(0, 'A00001', 3), -- students in COSC125 for Fall2023
(1, 'A00002', 3),
(2, 'A00003', 3),
(3, 'A00004', 3);

insert into CourseAssignment values
(0, 3, 'Quiz 1', 5), -- assignments for COSC125
(1, 3, 'Quiz 2', 5),
(2, 3, 'Quiz 3', 5),
(3, 3, 'Midterm', 15),
(4, 3, 'AS1', 10),
(5, 3, 'AS2', 10),
(6, 3, 'Project', 20),
(7, 3, 'Final Exam', 30);

insert into StudentGrade values
(0, 0, 'A00001', 100), -- grades for Student 1 in COSC125
(1, 1, 'A00001', 90),
(2, 2, 'A00001', 85),
(3, 3, 'A00001', 90),
(4, 4, 'A00001', 85),
(5, 5, 'A00001', 90),
(6, 6, 'A00001', 100),
(7, 7, 'A00001', 89),
(8, 0, 'A00002', 100), -- grades for Student 2 in COSC125
(9, 1, 'A00002', 100),
(10, 2, 'A00002', 100),
(11, 3, 'A00002', 100),
(12, 4, 'A00002', 100),
(13, 5, 'A00002', 100),
(14, 6, 'A00002', 100),
(15, 7, 'A00002', 100),
(16, 0, 'A00003', 100), -- grades for Student 3 in COSC125
(17, 1, 'A00003', 100),
(18, 2, 'A00003', 100),
(19, 3, 'A00003', 100),
(20, 4, 'A00003', 100),
(21, 5, 'A00003', 100),
(22, 6, 'A00003', 100),
(23, 7, 'A00003', 100),
(24, 0, 'A00004', 100), -- grades for Student 4 in COSC125
(25, 1, 'A00004', 100),
(26, 2, 'A00004', 100),
(27, 3, 'A00004', 100),
(28, 4, 'A00004', 100),
(29, 5, 'A00004', 100),
(30, 6, 'A00004', 100),
(31, 7, 'A00004', 100);


