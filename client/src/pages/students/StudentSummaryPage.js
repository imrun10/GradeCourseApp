import React, { useState } from "react";
import Axios from "axios";
import { NavigationType, useLocation } from "react-router-dom";
import StudentTable from "../../components/Tables/Table";
import AssignmentGradesTable from "../../components/Tables/AssignmentGradesTable";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar"; // this is how we import css from other files
import "../../App.css";
function StudentSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [studentData, setStudentData] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);

  //Get student and assignment data from backend
  Axios.get("http://localhost:3001/api/studentSummaryStudent", {
    params:{
      name: location.state.name,
      id: location.state.id,
      grade: location.state.grade,
      gpa: location.state.gpa,
    }
  }).then((response) => setStudentData(response.data));
  //Gets assignments list data from backend
  Axios.get("http://localhost:3001/api/studentSummaryAssignments", {
    params:{
      name: location.state.assignmentName,
      grade: location.state.assignmentGrade,
      low: location.state.assignmentMin,
      mean: location.state.assignmentMean,
      high: location.state.assignmentMax,
      weight: location.state.assignmentWeight,
    }
  }).then((response) => setAssignmentData(response.data));

  function DownloadSummaryFile() {
    console.log("Downloading CSV file...");
  }
  const toPrevious=()=>{
    navigate(-1); // Go back to the previous page (CoursePage)
  }

  // Data for this page will instead be sent from the CoursePage.js page and not database
  // the format for the data will be as follows: {name: "Firstname M. Lastname", id: "A00000", courseCode: "ABCD123", assignments: [{name: "Quiz 1", percentage: 90, weight: 20}, {name: "Quiz 2", percentage: 90, weight: 20}, {name: "Quiz 3", percentage: 90, weight: 20}, {name: "Final Exam", percentage: 90, weight: 20}]}
  // currently this isnt the format of the data, but it will be changed to this format by the end of today or early tomorrow
 
  const courseName = "CourseName";
  const courseCode = "ABCD123";

  //Temporary arrays that store student information and assignment grade data
  const testStudentData = [{name:location.state.name, id:location.state.id, grade:100}];
  const testAssignmentData = [
    {name: "Quiz 1", grade: 90, low: 70, mean: 80, high: 100, weight: 10},
    {name: "Quiz 2", grade: 80, low: 70, mean: 92, high: 100, weight: 10},
    {name: "Quiz 3", grade: 80, low: 20, mean: 85, high: 92, weight: 10},
    {name: "Homework 1", grade: 100, low: 80, mean: 90, high: 100, weight: 10},
    {name: "Homework 2", grade: 100, low: 80, mean: 90, high: 100, weight: 10},
    {name: "Midterm Exam", grade: 80, low: 40, mean: 80, high: 95, weight: 20},
    {name: "Final Exam", grade: 90, low: 75, mean: 88, high: 100, weight: 30},
  ];

  return (
    <div>
      <header>

        <Navbar />
        <h1 class="title">Student Summary</h1>
      </header>
      <br/>
      {/*Changed table to use components instead of static table*/}
      <body>
        <div class="wrapper">

          <div id="content">
            {/*Table containing student information*/}
            <StudentTable props={testStudentData} />
            {/*Table containing assignments, grades, and averages*/}
            <AssignmentGradesTable props={testAssignmentData} />
          </div>

        </div>
      </body>

      <footer class="footer">

        {/*Go to previous page (CoursePage*/}
        <button class="btn btn-primary"
        onClick={(e) => { toPrevious();}}>
          Go Back
        </button>

        {/*Download course summary csv file when clicked*/}
        <button class="btn btn-primary"
        onClick={(e) => { DownloadSummaryFile();}}>
          Download Student Summary
        </button>

      </footer>
    </div>
  );
}

export default StudentSummaryPage;
