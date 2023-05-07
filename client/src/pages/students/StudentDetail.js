import Axios from "axios"; // Axios is a HTTP client for the browser and node.js (send data to backend)
import { useState } from "react"; // useState is a hook that allows us to use variables in the html portoin of the code
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../../components/Tables/Table"; // table component
import Navbar from "../../components/NavBar/NavBar";
import { useCookies } from "react-cookie";

export default function StudentDetail() {

  const [importedStudents, setImportedStudents] = useState([]); // this use state will help us save the data we get from the backend of all the students in the course the user clicked

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

 
  // redirect to main page if token cookies and email cookies are set
  var emailCookie = cookies.email;
  Axios.get("http://localhost:3001/api/studentDetails",{params:{email:emailCookie}}).then((response) => setImportedStudents(response.data)); // we save the data we get from the backend in the importedStudents variabl
    return (
      <div>
        <header>
          <Navbar />
          <h1 class="smaller-title">
          Student Details
          </h1>
        </header>

        <body>
          <div class="wrapper">
            <div id="content">
              {/* this is how we pass data to the table component */}
              <Table props={importedStudents} code={2} />
            </div>
            <footer class="footer">
             

              <button
                class="btn btn-primary"
                style={{
                  backgroundColor: "RGB(100, 239, 100",
                  borderColor: "RGB(100, 239, 100)",
                }}
                onClick={(e) => {
                 
                }}
              >
                +
              </button>
            </footer>
          </div>
        </body>
      </div>
    );
  }

