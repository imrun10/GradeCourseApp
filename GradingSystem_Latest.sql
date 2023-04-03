

CREATE TABLE student(
     stu_id VARCHAR(10) PRIMARY KEY,
     sis_id VARCHAR(6),
     sis_Login VARCHAR(30) ,
     stu_Fname text,
     stu_Lname text
     );
CREATE TABLE Faculty (
    Faculty_id VARCHAR(10) PRIMARY KEY,
    Faculty_Fname text,
    Faculty_Lname text,
    Faculty_Username VARCHAR(20)
);
CREATE TABLE Registrar (
    Registrar_id VARCHAR(10) PRIMARY KEY,
    Registrar_Fname text,
    Registrar_Lname text,
    Registrar_Username VARCHAR(20)
);
CREATE TABLE IT (
    IT_id VARCHAR(10) PRIMARY KEY,
    IT_Fname text,
    IT_Lname text,
    IT_Username VARCHAR(20)
);

CREATE TABLE Section (
    Section_id int PRIMARY KEY,
    CourseCode varchar(10),
    CourseName text 
);

CREATE TABLE FacultySection(
    Fac_Section_id int PRIMARY KEY NOT NULL,
    Faculty_id VARCHAR(10), 
   Section_id int,
 
  FOREIGN KEY (Section_id) REFERENCES section(Section_id),
  FOREIGN KEY (Faculty_id) REFERENCES faculty(Faculty_id)

);
 
 
CREATE TABLE Assignment(
    Assignment_id int PRIMARY KEY NOT NULL,
    AssignmentName text, 
    AssignmentStatus text,
    AssignmentGrade int,
    AssignmentPercentage decimal


);


CREATE TABLE Grades(
Grades_id int PRIMARY KEY NOT NULL,
Facultysection_id int,
Stu_section_id int,
Section_id int,
Assignment_id int,

  FOREIGN KEY (Facultysection_id) REFERENCES Facultysection(Fac_Section_id),
  FOREIGN KEY (Stu_section_id) REFERENCES Studentsection(stu_section_id),
  FOREIGN KEY (Section_id) REFERENCES Section(Section_id),
  FOREIGN KEY (Assignment_id) REFERENCES Assignment(Assignment_id),

);