import react from "react";
import Axios from "axios";
import "./StudentSummaryPage.css";

function DownloadSummaryFile() {
  console.log("Downloading CSV file...");
}

function GetStudentData() {
  console.log("Retrieve Student data...");
}
function GetAssignmentData() {
  console.log("Retrieve Assignment data...");
}

function StudentSummaryPage() {
  const courseCode = "ABCD123";
  const studentName = "Firstname M. Lastname";
  const studentID = "A00000";

  return (
    <div style={{ textAlign: "center", padding: "10px"}}>

      <header>
        <h1 class = "title">
          STUDENT SUMMARY
        </h1>
      </header>

      <body>
        <br></br>
        <table width = "500px" style = {{ backgroundColor: "#303050" }}>
          <tr style = {{ backgroundColor: "#404080" }}>
            <th>Student Name</th><th>ID</th><th>Course</th>
          </tr>
          <tr>
            <td>{studentName}</td><td>{studentID}</td><td>{courseCode}</td>
          </tr>
        </table>
        <br></br>
        <table style = {{ backgroundColor: "#303050" }}>
          <tr style = {{ backgroundColor: "#404080" }}>
            <th>Assignment</th><th>Percentage</th><th>Weight</th><th>Weighted Grade</th>
          </tr>
          <tr>
            <td>Quiz 1</td><td>90%</td><td>20%</td><td>{90*0.2}%</td>
          </tr>
          <tr>
            <td>Quiz 2</td><td>90%</td><td>20%</td><td>{90*0.2}%</td>
          </tr>
          <tr>
            <td>Quiz 3</td><td>90%</td><td>20%</td><td>{90*0.2}%</td>
          </tr>
          <tr>
            <td>Final Exam</td><td>90%</td><td>30%</td><td>{90*0.3}%</td>
          </tr>
          <tr>
            <td>Participation</td><td>90%</td><td>10%</td><td>{90*0.1}%</td>
          </tr>
          <tr><td></td></tr>
          <tr style = {{ backgroundColor: "#202040" }}>
            <th> TOTAL GRADE</th><td></td><td></td><td>90%</td>
          </tr>
        </table>

      </body>

      <footer>

        <button class="btn btn-primary"
          onClick={(e) => { DownloadSummaryFile(); }}> Download Student Summary
        </button>

      </footer>

    </div>
  );
}
  
export default StudentSummaryPage;

