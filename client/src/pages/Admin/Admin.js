import { Admin } from "react-admin";
import "../../App.css";

import Courses from "../../components/Courses";
import Navbar from "../../components/NavBar/NavBar";


function Adm(){

    const cards = [{CourseName: "Manage", CourseCode: "Accounts", FacultyName: "",code:3},{CourseName: "Manage", CourseCode: "Courses", FacultyName: "",code:3},{CourseName: "Manage", CourseCode: "Students", FacultyName: "",code:3},{CourseName: "Manage", CourseCode: "Instructors", FacultyName: "",code:3},]

    
    
    
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
        </div>
      );
    }

export default Adm;