import react from "react";
import Axios from "axios";
import "./StudentSummaryPage.css";
import {
  useLocation,
} from "react-router-dom";

function StudentSummaryPage() {
  const location = useLocation();

  function DownloadSummaryFile() {
    console.log("Downloading CSV file...");
  }

  // Data for this page will instead be sent from the CoursePage.js page and not database
  // the format for the data will be as follows: {name: "Firstname M. Lastname", id: "A00000", courseCode: "ABCD123", assignments: [{name: "Quiz 1", percentage: 90, weight: 20}, {name: "Quiz 2", percentage: 90, weight: 20}, {name: "Quiz 3", percentage: 90, weight: 20}, {name: "Final Exam", percentage: 90, weight: 20}]}
  // currently this isnt the format of the data, but it will be changed to this format by the end of today or early tomorrow
 
  const courseCode = "ABCD123";
  const studentName = "Firstname M. Lastname";
  const studentID = "A00000";

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <header>
        <h1 class="title">STUDENT SUMMARY</h1>
      </header>

      <body>
        <br></br>
        <table width="500px">
          <tr style={{ backgroundColor: "#004080" }}>
            <th>Name</th>
            <th>ID</th>
            <th>Course</th>
          </tr>
          <tr>
            <td>{location.state.name}</td>
            <td>{location.state.id}</td>
            <td>{courseCode}</td>
          </tr>
        </table>
        <br></br>
        <table>
          <tr style={{ backgroundColor: "#004080" }}>
            <th>Assignment</th>
            <th>Percentage</th>
            <th>Weight</th>
            <th>Weighted Grade</th>
          </tr>
          <tr>
            <td>Quiz 1</td>
            <td>90%</td>
            <td>20%</td>
            <td>{90 * 0.2}%</td>
          </tr>
          <tr>
            <td>Quiz 2</td>
            <td>90%</td>
            <td>20%</td>
            <td>{90 * 0.2}%</td>
          </tr>
          <tr>
            <td>Quiz 3</td>
            <td>90%</td>
            <td>20%</td>
            <td>{90 * 0.2}%</td>
          </tr>
          <tr>
            <td>Final Exam</td>
            <td>90%</td>
            <td>30%</td>
            <td>{90 * 0.3}%</td>
          </tr>
          <tr>
            <td>Participation</td>
            <td>90%</td>
            <td>10%</td>
            <td>{90 * 0.1}%</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <th> TOTAL GRADE</th>
            <td></td>
            <td></td>
            <th>90%</th>
          </tr>
        </table>
      </body>

      <footer class="footer">
        <button
          class="btn btn-primary"
          onClick={(e) => {
            DownloadSummaryFile();
          }}
        >
          {" "}
          Download Student Summary
        </button>
      </footer>
    </div>
  );
}

export default StudentSummaryPage;
