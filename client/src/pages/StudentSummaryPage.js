import React, { useState } from "react";
import Axios from "axios";
import "./StudentSummaryPage.css";
import { NavigationType, useLocation } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import AssignmentGradesTable from "../components/AssignmentGradesTable";
import { useNavigate } from "react-router-dom";

function StudentSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();

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

  //Temporary arrays that will store student information and assignment grade data
  const studentData = [{name:location.state.name, id:location.state.id, grade:100}];
  const assignmentData = [{name: "Quiz 1", percentage: 90, weight: 20}, {name: "Quiz 2", percentage: 90, weight: 20}, {name: "Quiz 3", percentage: 90, weight: 20}, {name: "Final Exam", percentage: 90, weight: 20}];

  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1 class="title">Student Summary</h1>
      </header>
      <br/>
      {/*Changed table to use components instead of static table*/}
      <body>
        <div class="wrapper" style={{padding:"20px"}}>

          <div id="content">
            {/*Table containing student information*/}
            <StudentTable props={studentData} />
            {/*Table containing assignments, grades, and averages*/}
            <AssignmentGradesTable props={assignmentData} />
          </div>

        </div>
      </body>

      <footer class="footer" style={{ textAlign: "center" }}>

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
