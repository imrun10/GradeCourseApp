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
CREATE TABLE Section (
    Section_id int PRIMARY KEY,
    CourseCode int,
    CourseName text 
);

CREATE TABLE FacultySection(
    Fac_Section_id int PRIMARY KEY NOT NULL,
    Faculty_id VARCHAR(10), 
   Section_id int,
 
  FOREIGN KEY (Section_id) REFERENCES section(Section_id),
  FOREIGN KEY (Faculty_id) REFERENCES faculty(Faculty_id)

);
 


CREATE TABLE StudentSection(
    Stu_Section_id int PRIMARY KEY NOT NULL,
    stu_id VARCHAR(10), 
   Section_id int,
 
  FOREIGN KEY (Section_id) REFERENCES section(Section_id),
  FOREIGN KEY (stu_id) REFERENCES student(stu_id)

);


CREATE TABLE Midterm(
    Midterm_Id int PRIMARY KEY NOT NULL,
    MidtermStatus text,
    MidtermGrade int,
    MidtermPercentage int

);
 
 
CREATE TABLE Participation(
    Participation_id int PRIMARY KEY NOT NULL,
    ParticipationGrade int, 
   ParticipationPer int

);
 

CREATE TABLE Homework(
    Homework_id int PRIMARY KEY NOT NULL,
    HomeWorkName text,
    HomeWorkGrade int, 
    HomeWorkPercentage int

 

);
 
CREATE TABLE Test(
    Test_id int PRIMARY KEY NOT NULL,
    Test_No int, 
    TestStatus text,
    TestGrade int,
    TestPercentage int

);

CREATE TABLE Assignment(
    Assignment_id int PRIMARY KEY NOT NULL,
    AssignmentName int, 
    AssignmentStatus text,
    AssignmentGrade int,
    AssignmentPercentage int


);

CREATE TABLE Quiz(
    Quiz_id int PRIMARY KEY NOT NULL,
    QuizNo int, 
    QuizStatus text,
    QuizGrade int,
    QuizPercentage int

);

CREATE TABLE FinalExam(
    FinalExam_id int PRIMARY KEY NOT NULL,
    FinalExamtatus text,
    FinalExamGrade int,
    FinalExamPercentage int

);

CREATE TABLE Bonus(
    Bonus_id int PRIMARY KEY NOT NULL,
    BonusPoints text,
    BonusPercentage int

);

CREATE TABLE Grades(
Grades_id int PRIMARY KEY NOT NULL,
Facultysection_id int,
Stu_section_id int,
Section_id int,
Participation_Id int,
Quiz_id int,
Homework_id int,
Assignment_id int,
Test_id int,
Midterm_id int,
FinalExam_id int,
Bonus_id int,


  FOREIGN KEY (Facultysection_id) REFERENCES Facultysection(Fac_Section_id),
  FOREIGN KEY (Stu_section_id) REFERENCES Studentsection(stu_section_id),
  FOREIGN KEY (Section_id) REFERENCES Section(Section_id),
  FOREIGN KEY (Participation_Id)REFERENCES Participation(Participation_id),
  FOREIGN KEY (Quiz_id) REFERENCES Quiz(Quiz_id),
  FOREIGN KEY (Homework_id) REFERENCES Homework(Homework_id),
  FOREIGN KEY (Assignment_id) REFERENCES Assignment(Assignment_id),
  FOREIGN KEY (Test_id) REFERENCES Test(Test_id),
  FOREIGN KEY (Midterm_id) REFERENCES Midterm(Midterm_Id),
  FOREIGN KEY (FinalExam_id) REFERENCES FinalExam(FinalExam_Id),
  FOREIGN KEY (Bonus_id) REFERENCES Bonus(Bonus_Id)

);