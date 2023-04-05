import react from "react";
import { useLocation } from "react-router-dom"; // useLocation will allow us to use data sent from other pages when they link here
import Axios from "axios"; // Axios is a HTTP client for the browser and node.js (send data to backend)
import { useState } from "react"; // useState is a hook that allows us to use variables in the html portoin of the code
import "../App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../components/Table"; // table component
import Papa from "papaparse"; // papa parse is a library that allows us to parse csv files
import Navbar from "../components/NavBar";
import Error1 from "../components/Error1";
export default function CoursePage() {
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
  function sendFile() {
    // this function will send the csv file to the backend
    Axios.post("http://localhost:3001/api/save/", {
      arr: parsedData, // this is how we send data to the backend when using a post request, parsedData is an object, and you could add more objects or vars if you want after the comma but it has to be same format
    }).then(console.log("SENT")); // this is just a console log to make sure the data was sent
  }

  function showData() {
    // this function will send a get request to the backend to check the array has been saved in the database
    Axios.get("http://localhost:3001/api/checkArray").then(
      console.log("shown")
    );
  }
  /*--------------------------------------------------------------------------*/

  /*------------------------------- Convert csv to an array -------------------------------*/
  //State to store all data in a list of objects
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  /*-----------------------------------------------------------------------------------*/


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
              <Table props={importedStudents} />{" "}
              {/* this is how we pass data to the table component */}
            </div>
            <footer class="footer">
              <input
                class="btn btn-primary"
                type="file"
                name="file"
                accept=".csv"
                onChange={changeHandler} // this is how we call the function that converts the csv file to an array
              />

              <button
                class="btn btn-primary"
                style={{
                  backgroundColor: "RGB(100, 239, 100",
                  borderColor: "RGB(100, 239, 100)",
                }}
                onClick={(e) => {
                  sendFile();
                  showData();
                }}
              >
                +
              </button>
            </footer>
          </div>
        </body>
      </div>
    );
  }}

