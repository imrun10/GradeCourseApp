import React, { useState } from "react"; // useState is a hook that allows us to use variables in html as if they were javascript variables
import Axios from "axios"; // axios is a library that allows us to make http requests (send data to back end and get data from backend)
import Courses from "./components/Courses"; // this is how we import components from other files
import "bootstrap/dist/css/bootstrap.min.css"; // this is how we import bootstrap css
import "./App.css"; // this is how we import css from other files
import Navbar from "./components/NavBar/NavBar"; // this is how we import css from other files
import { useCookies } from "react-cookie"; // this is how we import cookies from other files

function App() {
  const [importedCourses, setImportedCourses] = useState([]); // this use state will save a list of courses(object) that we get from the backend

  //function to save the email cookie in a variabl called email cookie
const{get,set,cookies}=useCookies(['email']);
  
  // this is a get request to the backend, the backend will send a list of courses to the frontend, and the frontend will save the list in the importedCourses variable
  Axios.get("http://localhost:3001/api/course/",{}).then((response) => {
    setImportedCourses(response.data);
  });

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
