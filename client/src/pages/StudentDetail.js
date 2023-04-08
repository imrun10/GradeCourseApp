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
export default function StudentDetail() {
  /*------------------------------- NOT DONE YET -------------------------------*/
  //   function getStudent(x){
  //     Axios.get("http://localhost:3001/api/show/").then((response)=>{
  //       setStudent(response.data);
  // })
  //  }

  //}
  /*----------------------------------------------------------------------------*/

  /*------------------------------- Axios Requests -------------------------------*/

    return (
      <div>
        <header>
          <Navbar />
          <h1 class="smaller-title">
   
          </h1>
        </header>

        <body>
          <div class="wrapper">
            <div id="content">
              {/* this is how we pass data to the table component */}
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

