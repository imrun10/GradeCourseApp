import react from "react";
import {
  useLocation,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../components/Table";
import Papa from "papaparse";

export default function CoursePage() {
  const location = useLocation();

  const [importedStudents, setImportedStudents] = useState([]);

  //   function getStudent(x){
  //     Axios.get("http://localhost:3001/api/show/").then((response)=>{
  //       setStudent(response.data);
  // })
  //  }

  //}

  Axios.get("http://localhost:3001/api/student", {
    params: {
      name: location.state.name,
    },
  }).then((response) => setImportedStudents(response.data));

  function sendFile() {
    Axios.post("http://localhost:3001/api/save/", {
      arr: parsedData,
    }).then(console.log("SENT"));
    console.log(parsedData);
  }

  function showData() {
    Axios.get("http://localhost:3001/api/checkArray").then(console.log("shown"));
  }

  // ---------------------------- convert csv to array ----------------------------
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

  // ---------------------------- convert csv to array ----------------------------

  //const checker = () => {
  //if(!(location.state.students == undefined || location.state.students == null || location.state.students == [] || importedStudents == [] || importedStudents == null || importedStudents == undefined)){
  //return (
  <div>
    <header></header>

    <body>
      <div class="wrapper">
        <div id="content">{location.state.name}</div>
        <footer class="footer">
          <input
            type="file"
            name="file"
            accept=".csv"
            onChange={changeHandler}
            style={{ display: "block", margin: "10px auto" }}
          />

          <button
            class="btn btn-primary"
            style={{
              backgroundColor: "RGB(100, 239, 100",
              borderColor: "RGB(100, 239, 100)",
            }}
            onClick={(e) => {}}
          >
            +
          </button>
        </footer>
      </div>
    </body>
  </div>;
  //);}
  //else {
  // return <div>EMPTY COURSE</div>
  //}

  return (
    <div>
      <header></header>

      <body>
        <div class="wrapper">
          <div id="content">
            {location.state.name}
            <Table props={importedStudents} />
          </div>
          <footer class="footer">
            <input
              class="btn btn-primary"
              type="file"
              name="file"
              accept=".csv"
              onChange={changeHandler}
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
}
