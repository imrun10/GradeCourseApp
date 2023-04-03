const express = require("express");  // we use ex[ress to create the server and handle requests
const app = express();           // create the server and store it in a class called app
const mysql = require("mysql"); // we use mysql to connect to the database
const cors = require("cors");  // we use cors to allow cross origin requests which means that we can make requests from the frontend to the backend
app.use(cors()); // we make our server use cors
app.use(express.json()); // we make our server use express.json() which is a middleware that allows us to parse json



// we create a connection to the database
const con = mysql.createConnection({ 
  host: "localhost",
  user: "root",
  password: "root",
  database: "GradingSystem",
});


let test_students = [  // list that contains two items. the first one is a object that contains the course name and the second one is a list that contains the students for that course
  [
    { courseName: "english" }, 
    [
      {
        no: 1,
        name: "ahmed",
        id: "1234",
        lab: 100,
        knowledge: 100,
        tests: 100,
        participation: 100,
        final: 100,
      },
      {
        no: 2,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 3,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 4,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 5,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 6,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 7,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 8,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 9,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 10,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 11,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 12,
        name: "Ibrahim",
        id: "A023",
        lab: 23,
        knowledge: 99,
        tests: 5,
        participation: 3,
        final: 98,
      },
      {
        no: 13,
        name: "ahmed",
        id: "1234",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
      {
        no: 14,
        name: "Roger",
        id: "A01432",
        lab: 23,
        knowledge: 23,
        tests: 59,
        participation: 3,
        final: 30,
      },
      {
        no: 15,
        name: "brian",
        id: "A0034",
        lab: 23,
        knowledge: 21,
        tests: 5,
        participation: 3,
        final: 13,
      },
    ],
  ],

  [
    { courseName: "science" }, // list that contains two items. the first one is a object that contains the course name and the second one is a list that contains the students for that course
    [
      {
        no: 1,
        name: "ahmed",
        id: "1234",
        lab: 100,
        knowledge: 100,
        tests: 100,
        participation: 100,
        final: 100,
      },
      {
        no: 2,
        name: "Brian",
        id: "A0023",
        lab: 34,
        knowledge: 24,
        tests: 52,
        participation: 25,
        final: 13,
      },
    ],
  ],
];

function x(name) { // get the students from the right course from the test_student array from the database
  for (let i = 0; i < test_students.length; i++) { // two dimentional array that why we have two for loop
    if (test_students[i][0].courseName === name) {
       return test_students[i][1];
    }
  }
}


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


/* Make sure you run this script (Select * from GradingSystem.student) in the database */
app.get("/api/student", (req, res) => {
   // query to get the students from the database
  con.query(`Select * from GradingSystem.student`,function(err,result,fields){
    if(err){
        console.log(err)
    }
    else{
        res.send(result)
    }
})
});

/* Make sure you run this script (Select * from GradingSystem.Section) in the database */
app.get("/api/course", (req, res) => { // send the courses to the front end

  //query to get courses from database
  con.query(`Select * from GradingSystem.Section`,function(err,result,fields){
    if(err){
        console.log(err)
    }
    else{
        res.send(result)
    }
})
});
app.get("/", (req, res) => { // test the server
  res.send("server test");
});

var CsvSent;
app.post("/api/save/", (req, res) => { // saves the array that the front end sent to the server as a variable
  CsvSent = req.body.arr;
});
app.get("/api/checkArray", (req, res) => {  // check if the array is empty or not by displaying it on the server
  res.send(CsvSent);
})

// get student data from the database for the studentSummaryPage
app.get("/api/studentSummaryStudent", (req, res) => {
  //database query here
})
// get student assignments data from the database for the studentSummaryPage
app.get("/api/studentSummaryAssignments", (req, res) => {
  //database query here
})


app.listen(3001, () => { // start the server
  console.log("listening on port 3001");
});
