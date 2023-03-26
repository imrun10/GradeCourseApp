import React, { useState } from "react";
import Axios from "axios";
import Courses from "./components/Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";




function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  let importedCourses =[
    {name:"english", id:"1241",prof:"Dr mar"},{name:"science", id:"2342",prof:"Dr mar"},]

 

  function sendFile() {
    Axios.post("http://localhost:3001/api/save/", {
      arr: array,
    }).then(console.log("SENT"));
  }


  function showData() {
    Axios.get("http://localhost:3001/api/show/").then(console.log("shown"));
  }

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }}>
      <header>
      <h1 class = "title">GRADE APP </h1> </header>


      <br />
      <body>
      <div class="container">
      {importedCourses.map((e) => (
            <div class="item"> 
           <Courses name={e.name} id={e.id} proff = {e.prof} />
           </div>
        ))}</div>
        </body>
                <footer>

              <form>
        <input
          class="btn btn-primary" 
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
        class="btn btn-primary" 
          onClick={(e) => {
            handleOnSubmit(e);
        

          }}
        >
          IMPORT CSV
        </button>

        <button
        class="btn btn-primary" 
        style = {{backgroundColor: "RGB(100, 239, 100",borderColor: "RGB(100, 239, 100)"}}
          onClick={(e) => {
            sendFile();
           

          }}
        >
          +
        </button>


        
      </form>
      </footer>
      
    </div>
    
  );
}

export default App;
