const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());


let test_student_course = [[{name:"english"},[{name:"imran",age:"34"},{name:"farooq",age:"34"},{name:"mars",age:"34"}]],
                            [{name:"science"},[{name:"maram",age:"22"},{name:"yousf",age:"23"},{name:"huda",age:"123"}]]];




[{coursname:"maths"},{studnt:"34"},{},{}]

app.get("/", (req, res) => {
  res.send("Hello world");
});

var d;

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
