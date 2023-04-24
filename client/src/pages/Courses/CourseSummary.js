import React, { useState } from "react";
import Axios from "axios";
import { useLocation, Link } from "react-router-dom"; // useLocation will allow us to use data sent from other pages when they link here
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/NavBar/NavBar";
import Error1 from "../../components/ErrorPages/Error1";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CourseSummary() {
  const location = useLocation();
  //*
  // Stores course data from backend
  const [courseInfo, setCourseInfo] = useState([]);
  
  Axios.get("http://localhost:3001/api/courseSummaryData", {
  }).then((response) => setCourseInfo(response.data));

  /*/
  const courseInfo = {
      course_name: location.state.name,
      course_code: location.state.id,
      avg_pass: "100 %",
      avg_fail: "0 %",
      course_outcomes: "course description goes here..."
  };
  //*/

  if(courseInfo === "MISSING"){
    return (<header><Navbar /></header>, <Error1 />)
  }
  else{
    return (
      <div>
        <header>
          <Navbar /><h1 class="smaller-title"> Course Summary </h1>
        </header>

        <body>
          <div class="wrapper">
            <div id="content">
              Course Name: {courseInfo.name} <br/>
              Course Code: {courseInfo.code} <br/>
              Average Pass Rate: {courseInfo.passRate} <br/>
              Average Fail Rate: {courseInfo.failRate} <br/>
              Course Outcomes: {courseInfo.courseOutcomes} <br/>
            </div>

            <footer class="footer">
            <Link to="/coursePage/course" state ={location.state}><button class = "btn sign-out">Go back</button></Link>
            <Link to="" state ={location.state}><button class = "btn sign-out">Download</button></Link>
            </footer>

          </div>
        </body>
      </div>
    );
  }}

