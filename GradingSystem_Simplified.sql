
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
	foreign key (student_id) references Student (student_id),
	foreign key (assignment_id) references CourseAssignment (assignment_id)
);


