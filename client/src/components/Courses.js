import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, createBrowserRouter, RouterProvider, Route,Link } from "react-router-dom";
 

import './componentsCSS.css'
function Courses(props) {
    const navigate = useNavigate();


  

    
    const toCourse = () => {
     
      navigate("course", {state: props});
    };

    return (
        <a onClick={()=>{ toCourse()}}>            
            <div class="card" id="course-card">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.id}</p>
                    <p class="card-text">{props.proff}</p>
                </div>
            </div>
        </a> 

  

        )}


export default Courses;
// Path: client/src/components/courses.js
