import React, { useState } from "react"; // useState is a hook that allows us to use variables in html as if they were javascript variables
import Axios from "axios"; // axios is a library that allows us to make http requests (send data to back end and get data from backend)
import Courses from "../components/Courses"; // this is how we import components from other files
import "bootstrap/dist/css/bootstrap.min.css"; // this is how we import bootstrap css
import "../App.css"; // this is how we import css from other files
import Navbar from "../components/NavBar/NavBar"; // this is how we import css from other files
import { useCookies } from "react-cookie"; // this is how we import cookies from other files
import { useEffect } from "react"; // this is how we import useEffect from other files

import { Link } from "react-router-dom"; // this is how we import Link from other files


function MainPage() {

  //checks if security level is 3 and if it is displays a button  tthat redirects to the admin page
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  var securityCookie = cookies.security;
  var emailCookie = cookies.email;
    //checks if security level is 3 and if it is displays a button  tthat redirects to the admin page
    if(securityCookie == 3){
      function ButtonToAdmin(){
        return <Link to="/admin" class="btn btn-primary">Admin Page</Link>
      }}
    else{
      function ButtonToAdmin(){
        return <div></div>
      }
    }

  
  const cards = [{CourseName: "View", CourseCode: "Student", FacultyName: "Detailes",code:1},{CourseName: "View", CourseCode: "Course", FacultyName: "Detailes",code:1},]
  return (
    <div style={{ textAlign: "center" }}>
      <header>
      <Navbar />
      </header>

      <br />
      <body>
        <div class="container">
          {/*this is how we loop through the importedCourses array and display the courses in the array*/}
          {cards.map((e) => (
            <div class="item">
              <Courses name={e.CourseName} id={e.CourseCode} proff={e.FacultyName} code={e.code} />
              {/*this is how we send data to the courses component, we send the course name, id and proff*/}
            </div>
          ))}
        </div>
      </body>
      <footer>


      </footer>
    </div>
  );
}

export default MainPage;
