import React, { useState, useEffect } from "react";
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
  const [courseList, setCourseList] = useState([]);
  const getCourseList = () => { 
    return (Axios.get("http://localhost:3001/api/courseSummaryData", {
    }).then((response) => {setCourseList(response.data)}));
  }
  var thisCourse;
  useEffect(() => {
    getCourseList();
    var _current;
    for (var i = 0; i < courseList.length; i++) {
      _current = courseList[i];
      if (_current.code === location.state.id) {
        thisCourse = _current;
        break;
      }
    }
  }, []);

  /*
  const testCourseInfo = {
      course_name: 'Full Course Name',
      course_code: 'COURSECODE',
      avg_pass: "100 %", avg_fail: "0 %",
      course_outcomes: 'Course description goes here...'
  };
  //*/

  if(courseList === "MISSING"){
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
              {courseList.map((course, index) => {
                return (
                  <div>
                  <p><b>Course Name : </b>{course.name}</p>
                  <p><b>Course Code : </b>{course.code}</p>
                  <p><b>Course Outcomes : </b>{course.outcomes}</p>
                  </div>
                );
              })}
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

