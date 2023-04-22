use Grading_System_fixed

DELIMITER $$

CREATE PROCEDURE GetStudents()

BEGIN --
select * from Student;
END $$


CREATE PROCEDURE GetCourses()

BEGIN --
select student.student_id, student_fname, student_lname, percentage, gpa 
    from StudentGrade join Student join CourseAssignment 
    on student.student_id = studentgrade.student_id and 
    studentgrade.assignment_id =courseassignment.assignment_id;
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
    group by courseassignment.assignment_name, courseassignment.assignment_weight, studentGrade.Percentage
;
END $$

DELIMITER ;