import react from "react";
import { useLocation, Link } from "react-router-dom"; // useLocation will allow us to use data sent from other pages when they link here
import Axios from "axios"; // Axios is a HTTP client for the browser and node.js (send data to backend)
import { useState } from "react"; // useState is a hook that allows us to use variables in the html portoin of the code
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../../components/Tables/Table"; // table component
import Papa from "papaparse"; // papa parse is a library that allows us to parse csv files
import Navbar from "../../components/NavBar/NavBar";
import Error1 from "../../components/ErrorPages/Error1";
export default function CourseDetails() {
  const location = useLocation(); // we create and instance of this function and use it to get the data sent from the previous page
  const [importedStudents, setImportedStudents] = useState([]); // this use state will help us save the data we get from the backend of all the students in the course the user clicked
  /*------------------------------- NOT DONE YET -------------------------------*/
  //   function getStudent(x){
  //     Axios.get("http://localhost:3001/api/show/").then((response)=>{
  //       setStudent(response.data);
  // })
  //  }

  //}
  /*----------------------------------------------------------------------------*/

  /*------------------------------- Axios Requests -------------------------------*/
  Axios.get("http://localhost:3001/api/student", {
    // this is a get request to the backend to get all the students in the course the user clicked
    params: {
      // this is how you send data to the back end when using a get request
      name: location.state.name,
      // we send the name of the course so when parsing the test_student array we can get the right students for the right course
    },
  }).then((response) => setImportedStudents(response.data)); // we save the data we get from the backend in the importedStudents variable
  console.log(importedStudents); // this is just a console log to make sure the data was saved in the importedStudents variable
  
  /*--------------------------------------------------------------------------*/

  


  if(importedStudents === "MISSING"){
    return (<header><Navbar /></header>, <Error1 />)
  }
  else{
    return (
      <div>
        <header>
          <Navbar />
          <h1 class="smaller-title">
            {location.state.name.charAt(0).toUpperCase() +
              location.state.name.slice(1)}
          </h1>
        </header>

        <body>
          <div class="wrapper">
            <div id="content">
              <Table props={importedStudents} code={1}/>{" "}
              {/* this is how we pass data to the table component */}
            </div>
            <footer class="footer">
              

            <Link to="/coursePage/course" state ={location.state}><button class = "btn sign-out">Go back</button></Link>

            </footer>
          </div>
        </body>
      </div>
    );
  }}

