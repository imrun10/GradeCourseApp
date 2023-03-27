import react from "react";
import { useLocation, useNavigate, createBrowserRouter, RouterProvider, Route,Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import '../App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CoursePage() {
    const location = useLocation();
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [student, setStudent] = useState([]);


 //   function getStudent(x){
   //     Axios.get("http://localhost:3001/api/show/").then((response)=>{
     //       setStudent(response.data);
       // })
  //  }

    //}




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



  const headerKeys = Object.keys(Object.assign({}, ...array));

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

    return (
    
    <div>
        <header>

        </header>

        <body claidss = "page-container">
            <div id = "content-wrap">
        {location.state.name}
        </div>

        </body>

            <footer id="footer">

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
                        style={{ backgroundColor: "RGB(100, 239, 100", borderColor: "RGB(100, 239, 100)" }}
                        onClick={(e) => {
                          sendFile();

                            


                        }}
                    >
                        +
                    </button>

                    <button></button>
                    </form>
                </footer>

    </div>);}