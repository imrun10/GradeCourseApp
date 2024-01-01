import React, { useEffect, useState } from "react"; // useState is a hook that allows us to use variables in html as if they were javascript variables
import Axios from "axios"; // axios is a library that allows us to make http requests (send data to back end and get data from backend)
import Courses from "./components/Courses"; // this is how we import components from other files
import "bootstrap/dist/css/bootstrap.min.css"; // this is how we import bootstrap css
import "./App.css"; // this is how we import css from other files
import Navbar from "./components/NavBar/NavBar"; // this is how we import css from other files
import { useCookies } from "react-cookie"; // this is how we import cookies from other files

function App() {
  const [importedCourses, setImportedCourses] = useState([]); // this use state will save a list of courses(object) that we get from the backend

  //function to save the email cookie in a variabl called email cookie
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

 
  // redirect to main page if token cookies and email cookies are set
  var emailCookie = cookies.email;
  var tokenCookie = cookies.token;
  var securityCookie = cookies.security;


useEffect(() => {

  if(securityCookie == 1){
  getCourses();}
  else if(securityCookie == 2 || securityCookie == 3){
    getAllCourses();}
  },[]);

  const getCourses = async () => {
    console.log("erq");
  await Axios.get("http://localhost:3001/api/course/",{params: {email:emailCookie}}).then((response) => {
    setImportedCourses(response.data); console.log("sent");
  });}; // this function will get the courses from the backend and save them in the importedCourses variable

  const getAllCourses = async () => {
    console.log("erq");
  await Axios.get("http://localhost:3001/api/course/all").then((response) => {
    setImportedCourses(response.data); console.log("sent");
  });}; // this function will get the courses from the backend and save them in the importedCourses variable

  return (
    <div style={{ textAlign: "center" }}>
      <header>
      <Navbar />
      </header>

      <br />
      <body>
        <div class="container">
          {/*this is how we loop through the importedCourses array and display the courses in the array*/}
          {importedCourses.map((e) => (
            <div class="item">
              <Courses name={e.course_name} id={e.course_code} proff={"Dr " + e.Faculty_fname} />
              {/*this is how we send data to the courses component, we send the course name, id and proff*/}
            </div>
          ))}
        </div>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
