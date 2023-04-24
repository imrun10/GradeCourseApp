import React, { useState } from "react";
import Axios from "axios";
import { useLocation, Link } from "react-router-dom"; // useLocation will allow us to use data sent from other pages when they link here
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/NavBar/NavBar";
import Error1 from "../../components/ErrorPages/Error1";

export default function CourseSummary() {
  const location = useLocation();
  //*
  // Stores course data from backend
  const [courseInfo, setCourseInfo] = useState([]);
  
  if (!courseInfo) {
    Axios.get("http://localhost:3001/api/courseSummaryData").then((response) => setCourseInfo(response.data));

  }

  /*
  const testCourseInfo = {
      course_name: Full Course Name,
      course_code: COURSECODE,
      avg_pass: "100 %"         avg_fail: "0 %",
      course_outcomes: Course description goes here...
  };
  */

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
              <b>Course Name: </b> {courseInfo.name} <br/>
              <b>Course Code: </b> {courseInfo.code} <br/>
              <b>Average Pass Rate: </b> {courseInfo.passRate} <b>Average Fail Rate: </b> {courseInfo.failRate} <br/>
              <b>Course Outcomes: </b> {courseInfo.courseOutcomes} <br/>
            </div>

            <footer class="footer">
            <Link to="/coursePage/course" state ={location.state}><button class = "btn btn-primary">Go back</button></Link>
            <Link to="" state ={location.state}><button class = "btn btn-primary">Download</button></Link>
            </footer>

          </div>
        </body>
      </div>
    );
  }}

