import React, { useState } from "react";
import Axios from "axios";
import Courses from "./components/Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";





function App() {
 
  const [importedCourses, setImportedCourses] = useState([]);

Axios.get("http://localhost:3001/api/course/").then((response)=>{(setImportedCourses(response.data))});


 

  return (
    <div style={{ textAlign: "center" }}>
      <header>
      <h1 class = "title">GRADE APP </h1>
       </header>


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
          
        </footer>

      
    </div>
    
  );
}

export default App;
