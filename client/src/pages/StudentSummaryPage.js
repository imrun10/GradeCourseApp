import react from "react";
import Axios from "axios";

function downloadSummaryFile() {
  console.log("Downloading CSV file...");
}

function StudentSummaryPage() {

  return (
    <div style={{ textAlign: "center" }}>

      <header>
        <h1 class = "title"> STUDENT SUMMARY
        </h1>
      </header>

      <body>
          
      </body>

      <footer>

        <button class="btn btn-primary"
          onClick={(e) => { downloadSummaryFile(); }}> Download Student Summary
        </button>

      </footer>

    </div>
  );
}
  
export default StudentSummaryPage;

