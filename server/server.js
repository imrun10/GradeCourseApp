const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "GradingSystem",
});

let test_student_course = "connection.js";

let test_courses = [
  { name: "english", id: "1241", prof: "Dr mar" },
  { name: "science", id: "2342", prof: "Dr mar" },
];
let test_students = [
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
    { courseName: "science" },
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

function x(name) {
  for (let i = 0; i < test_students.length; i++) {
    if (test_students[i][0].courseName === name) {
       return test_students[i][1];
    }
  }
}

app.get("/api/student", (req, res) => {
  const name = req.query.name;
  students = x(name);
  res.send(students);

});

app.get("/api/course", (req, res) => {
  res.send(test_courses);
});

app.get("/", (req, res) => {
  res.send("server test");
});

var d;
app.get("/api/checkArray", (req, res) => {
  res.send(d);
})

app.get("/api/show", (req, res) => {
  for (var i = 0; i < test_student_course.length; i++) {
    for (var j = 0; j < test_student_course[i].length; j++) {
      if (test_student_course[i][j].name == req.body.name) {
        res.send(test_student_course[i][j][1]);
      }
    }
  }
});

app.post("/api/save/", (req, res) => {
  d = req.body.arr;
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
