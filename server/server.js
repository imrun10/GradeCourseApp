const express = require("express"); // we use ex[ress to create the server and handle requests
const app = express(); // create the server and store it in a class called app
const mysql = require("mysql"); // we use mysql to connect to the database
const cors = require("cors"); // we use cors to allow cross origin requests which means that we can make requests from the frontend to the backend
app.use(cors()); // we make our server use cors
app.use(express.json()); // we make our server use express.json() which is a middleware that allows us to parse json
const jwt = require("jsonwebtoken"); // we use jsonwebtoken to create and verify tokens
const bcrypt = require("bcryptjs"); // we use bcrypt to hash passwords
require("dotenv").config();

// we create a connection to the database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "GradingSystem",
});

let test_student_course = "connection.js";

app.get("/display", (req, res) => {
  console.log("display");
});

app.post("/api/register", async (req, res) => {
  // Our register logic starts here
  
  // Get user input
  const { firstName, lastName, email, password } = req.body;
  //Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);

  // combine first name and last name to create a username
  const username = lastName+"123";

  // Validate user input
  if (!(email && password && firstName && lastName)) {
    res.send({ status: 0, message: "All input is required" });
  }
  
  // check if user already exist
  
  // Validate if user exist in our database
  var oldUser = false;
  var oldPassword = false;

  var database = [];

  // get all the users from the database and see if someone with the same email exist already or if password already exist
  console.log(email
  )
  con.connect(function (err) {
    con.query(
      `SELECT email, Password FROM Users`,
      function (err, result, fields) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
          if (result[i].email == email) {
            oldUser = true;
          }
          if (result[i].Password == password) {
            oldPassword = true;
          }
        }
        if (oldUser) {
          res.send({ status: 2, message: "User Already Exist" });

        }
        else if (oldPassword) {
          res.send({ status: 3, message: "Password Already Exist" });
        }
        else if (!oldUser && !oldPassword) {
          // Create user in our database
          con.query(
            "INSERT INTO users (firstName, lastName, email, userName, password) VALUES ('" +
            firstName +
            "', '" +
            lastName +
            "', '" +
            email +
            "', '" +
            username +
            "', '" +
            encryptedPassword +
            "')",
            function (err, result, fields) {
              if (err) throw err;
              const token = jwt.sign(
                { user_id: email, username },
                process.env.JWT_KEY,
                {
                  expiresIn: "2h",
                }
              );
              res.send({ status: 1, message: "User Created Successfully", token: token, email:email });
            }
          );
        }
      }
    );
  });

  // Create user in our database

  console.log("done")
  // Create token

  // save user token
})

// Our register logic ends here

// Login
app.post("/api/login", async (req, res) => {
  // our login logic goes here
  const { username, password } = req.body;
  
  if (!(username && password)) {
    res.send({ status: 0, message: "All input is required" });
  }

  var PriorityLevel;
  encryptedPassword = await bcrypt.hash(password, 10);
var token
var security
  var found = false;
  con.connect(function (err) {
    con.query(
      "SELECT * FROM users WHERE username = '" + username + "'",
      function (err, result, fields) {
        if (err) throw err;

        console.log(result);
        if (result.length > 0) {
          for(var i = 0; i < result.length; i++){
            var email = result[i].email
            PriorityLevel = result[i].PriorityLevel;
            const token = jwt.sign(
              { user_id: email, username },
              process.env.JWT_KEY,
              {
                expiresIn: "2h",
              }
            );
            onject = {message: "User loged in", token: token, email:email, security:PriorityLevel}
                    console.log(onject)
                    res.send(onject);
            console.log(password)
            
        }  if (!(token==null)){
            res.send({ status: 3, message: "Incorrect password" });
          }
        }
        else{
          res.send({ status: 2, message: "Invalid Credentials" });
        }
      })
  })})

  // test data  for the student and course table

  // HUDA add your code to get data from the database and transform it to the format of test_student and test_course
  app.get("/api/show", (req, res) => {
    for (var i = 0; i < test_student_course.length; i++) {
      for (var j = 0; j < test_student_course[i].length; j++) {
        if (test_student_course[i][j].name == req.body.name) {
          res.send(test_student_course[i][j][1]);
        }
      }
    }
  });

  function findStudents(name, students) {
    // find the students with the right course name and return them
    let notfound = true;
    let foundStudents = [];

    for (var i = 0; i < students.length; i++) {
      if (students[i].course_name === name) {
        notfound = false;
        foundStudents.push(students[i]);
      }
    }

    if (notfound) {
      return "MISSING";
    } else {
      return foundStudents;
    }
  }

  var students = [];
  app.get("/api/student", (req, res) => {
    let name = req.query.name;

    // send the students to the front end
    con.connect(function (err) {
      con.query(
        `SELECT Course.course_name, Student.student_id, Student.student_fname, quiz_1, quiz_2,quiz_3,quiz_4, homework_1,
              homework_2, midterm, exam FROM Assignments inner join Course inner join Student on Assignments.course_code = course.course_code and Assignments.student_id
              = Student.student_id`,
        function (err, result, fields) {
          if (err) throw err;
          res.send(findStudents(name, result));
        }
      );
    });
  });

  app.get("/api/studentDetails/all", (req, res) => {
    // send the students to the front end
    con.connect(function (err) {
      con.query(
        `SELECT Course.course_name, Student.student_id, Student.student_fname, quiz_1, quiz_2,quiz_3,quiz_4, homework_1,
              homework_2, midterm, exam FROM Assignments inner join Course inner join Student on Assignments.course_code = course.course_code and Assignments.student_id
              = Student.student_id`,
        function (err, result, fields) {
          if (err) throw err;
          res.send(result);
        }
      );
    });
  });
  app.get("/api/studentDetails", (req, res) => {
    const email = req.query.email;
  
    // Find the faculty_id based on the user's email
    con.query(
      "SELECT faculty_id FROM Faculty WHERE faculty_fname IN (SELECT FirstName FROM Users WHERE email = ?)",
      [email],
      function (err, facultyResult, fields) {
        if (err) throw err;
  
        if (facultyResult.length === 0) {
          // If no faculty found with the given email, return an empty result
          res.send([]);
          return;
        }
  
        const facultyId = facultyResult[0].faculty_id;
  
        // Retrieve the course codes taught by the faculty
        con.query(
          "SELECT course_code FROM CourseSection WHERE instructor = ?",
          [facultyId],
          function (err, courseResult, fields) {
            if (err) throw err;
  
            if (courseResult.length === 0) {
              // If no courses found, return an empty result
              res.send([]);
              return;
            }
  
            const courseCodes = courseResult.map((course) => course.course_code);
  
            // Retrieve the student details for the selected course codes
            con.query(
              "SELECT Course.course_name, Student.student_id, Student.student_fname, quiz_1, quiz_2, quiz_3, quiz_4, homework_1, homework_2, midterm, exam FROM Assignments INNER JOIN Student ON Assignments.student_id = Student.student_id INNER JOIN Course ON Assignments.course_code = Course.course_code WHERE Assignments.course_code IN (?)",
              [courseCodes],
              function (err, studentResult, fields) {
                if (err) throw err;
                res.send(studentResult);
              }
            );
          }
        );
      }
    );
  });

  app.get("/api/course", (req, res) => {
    email = req.query.email;
    console.log(email);
    
    // send the courses to the front end
    con.connect(function (err) {
      con.query(
        "SELECT section_id, Course.course_code, course_name, Faculty_fname,Faculty_Lname FROM CourseSection inner join Course inner join Users inner join Faculty on Users.FirstName = faculty.faculty_fname and courseSection.course_code = course.course_code and courseSection.instructor = faculty.faculty_id WHERE Users.email = ('" +email+ "')",
        function (err, result, fields) {
          if (err) throw err;
          res.send(result);
        }
      );
    });
  });

  app.get("/api/course/all", (req, res) => {
    // send the courses to the front end
    con.connect(function (err) {
      con.query(
        `SELECT section_id, Course.course_code, course_name, Faculty_fname, 
    Faculty_Lname FROM CourseSection inner join Course inner join Faculty 
    on courseSection.course_code = course.course_code and courseSection.instructor = faculty.faculty_id `,
        function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        }
      );
    });
  });

  app.get("/", (req, res) => {
    // test the server
    res.send("server test");
  });

  var CsvSent;

  // a function tht will go through a list of objects and make sure any data that a number is not a string and empty strings are replaced with null
  function checkData(data) {
    for (var i = 0; i < data.length; i++) {
      for (var key in data[i]) {
        if (data[i][key] === "") {
          data[i][key] = null;
        }
        if (typeof data[i][key] === "string") {
          if (!isNaN(data[i][key])) {
            data[i][key] = parseInt(data[i][key]);
          }
        }
      }
    }
    return data;
  }

  // function to turn a list of objects into a list of lists
  function objectToList(data, id) {
    let list = [];
    for (var i = 0; i < data.length; i++) {
      let temp = [];
      for (var key in data[i]) {
        temp.push(data[i][key]);
      }
      temp.push(id)
      temp.shift();
      list.push(temp);
    }
    console.log(list);
    return list;
  }

  //write code to save the csv to the database by uupdating the row with the same name and course code or if the row does not exist insert it
  app.post("/api/save/", (req, res) => {
    // saves the array that the front end sent to the server as a variable
    CsvSent = req.body.arr;
    id = req.body.id;
    console.log(id);
    dataList = objectToList(checkData(CsvSent), id);
    console.log(dataList);
    // insert the csv sent to the Assignments table in the database
    con.connect(function (err) {
      con.query(
        `INSERT INTO Assignments (student_id, quiz_1, quiz_2, quiz_3, quiz_4, homework_1, homework_2, midterm, exam, course_code)
         VALUES ? 
         ON DUPLICATE KEY UPDATE
           quiz_1 = VALUES(quiz_1),
           quiz_2 = VALUES(quiz_2),
           quiz_3 = VALUES(quiz_3),
           quiz_4 = VALUES(quiz_4),
           homework_1 = VALUES(homework_1),
           homework_2 = VALUES(homework_2),
           midterm = VALUES(midterm),
           exam = VALUES(exam)`,
        [dataList], // Wrap dataList in an outer array to represent multiple rows
        function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        }
      );
    });
  });

  app.get("/api/checkArray", (req, res) => {
    // check if the array is empty or not by displaying it on the server
    res.send(CsvSent);
  });

  app.get("/api/studentSummaryStudent", (req, res) => {
    con.connect(function (err) {
      con.query(
        `select student.student_id, student_fname, student_lname, percentage, gpa 
    from StudentGrade join Student join CourseAssignment 
    on student.student_id = studentgrade.student_id and 
    studentgrade.assignment_id =courseassignment.assignment_id `,
        function (err, result, fields) {
          if (err) throw err;
          res.send(result);
        }
      );
    });
    //studentName, studentID, AssignmentGrade, GPA
  });

  // get student assignments data from the database for the studentSummaryPage
  app.get("/api/studentSummaryAssignments", (req, res) => {
    con.connect(function (err) {
      con.query(
        `select courseassignment.assignment_name , percentage,
    min(Percentage), max(percentage), avg(percentage),courseassignment.assignment_weight 
    from StudentGrade join CourseAssignment on 
    StudentGrade.assignment_id = courseassignment.assignment_id 
    group by courseassignment.assignment_name, courseassignment.assignment_weight, studentGrade.Percentage `,
      function (err, result, fields) {
        if (err) throw err;
        res.send(result);
        //console.log(result);
      }
    );
  });
  //AssignmentName, Grade, Min, Mean, Max, Weight
});

// get account date from the database for the signin page
app.get("/api/accountData", (req, res) => {
  con.connect(function (err) {
    con.query(`select account_email, account_password, account_type from account`,
      function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      }
    );
  });
  //account_email, account_password, account_type
});

//Get course_name, course_code, avg_pass, avg_fail, course_outcomes for the course section from the database
app.get("/api/courseSummaryData", (req, res) => {
  var sql = `select c.course_code, c.course_name, c.outcomes from course c where (c.course_code = ?)`;
  con.query(sql, [code],
    function (err, result, fields) {
      if (err) {
        console.log(err);
        throw err;
      }
      else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

  app.listen(3001, () => {
    // start the server
    console.log("listening on port 3001");
  });
