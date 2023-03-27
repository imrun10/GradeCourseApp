import React, { useState } from "react";
import Axios from "axios";
import Courses from "./components/Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";




function App() {
 

  let importedCourses =[
    {name:"english", id:"1241",prof:"Dr mar"},{name:"science", id:"2342",prof:"Dr mar"},]

 

  return (
    <div style={{ textAlign: "center" }}>
      <header>
      <h1 class = "title">GRADE APP </h1> </header>


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
