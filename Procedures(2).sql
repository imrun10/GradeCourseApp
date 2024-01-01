
DELIMITER $$


CREATE PROCEDURE GetEmailPass()

BEGIN --
SELECT email, Password FROM Users;
  END $$       
  



CREATE PROCEDURE InsertUsers(IN FirstName varchar(50), IN LastName varchar(50),IN email Varchar(50),
IN Username varchar(50), IN UserPassword password(50),priorityLvl varchar(50))
BEGIN --
	INSERT INTO Users(FirstName, LastName, Email,UserName,Password,PriorityLevel) values (FirstName, LastName,
email,Username,UserPassword,priorityLvl);
END $$ 




CREATE PROCEDURE GetStudents()

BEGIN --
SELECT Course.course_name, Student.student_id, Student.student_fname, quiz_1, quiz_2,quiz_3,quiz_4, homework_1,
              homework_2, midterm, exam FROM Assignments inner join Course inner join Student on Assignments.course_code = course.course_code and Assignments.student_id
              = Student.student_id;
  END $$       
  
  
  
CREATE PROCEDURE GetstudentDetails()

BEGIN --
SELECT Course.course_name, Student.student_id, Student.student_fname, quiz_1, quiz_2,quiz_3,quiz_4, homework_1,
              homework_2, midterm, exam FROM Assignments inner join Course inner join Student on Assignments.course_code = course.course_code and Assignments.student_id
              = Student.student_id;
  END $$   
  
  
  CREATE PROCEDURE course()

BEGIN --
SELECT section_id, Course.course_code, course_name, Faculty_fname, 
    Faculty_Lname FROM CourseSection inner join Course inner join Faculty 
    on courseSection.course_code = course.course_code and courseSection.instructor = faculty.faculty_id;
  END $$   
  
  

CREATE PROCEDURE InserAssignments(IN student_id varchar(50), IN quiz_1 varchar(50),IN quiz_2 Varchar(50),
IN quiz_3 varchar(50), IN quiz_4 password(50),homework_1 varchar(50), homework_2 varchar(50),midterm varchar(50),exam varchar(50),course_code varchar(50))
BEGIN --
	INSERT INTO Assignments (student_id, quiz_1, quiz_2, quiz_3, quiz_4, homework_1, homework_2, midterm, exam, course_code) VALUES ?;
END $$


  CREATE PROCEDURE GetStudentSummaryStudent()

BEGIN --
select student.student_id, student_fname, student_lname, percentage, gpa 
    from StudentGrade join Student join CourseAssignment 
    on student.student_id = studentgrade.student_id and 
    studentgrade.assignment_id =courseassignment.assignment_id;
  END $$   
  
  CREATE PROCEDURE GetStudentSummaryAssignments()

BEGIN --
select courseassignment.assignment_name , percentage,
    min(Percentage), max(percentage), avg(percentage),courseassignment.assignment_weight 
    from StudentGrade join CourseAssignment on 
    StudentGrade.assignment_id = courseassignment.assignment_id 
    group by courseassignment.assignment_name, courseassignment.assignment_weight, studentGrade.Percentage;
  END $$   
  
  
   CREATE PROCEDURE GetAccountData()

BEGIN --
select account_email, account_password, account_type from account;
  END $$   
  
  
   
   CREATE PROCEDURE GetCourseSummaryData()

BEGIN --
select c.course_code as code, c.course_name as name, c.outcomes from course c join courseSection cs on c.course_code = cs.course_code;
  END $$   
          
DELIMITER ;






 



