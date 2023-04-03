import 'bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap
import { useNavigate } from "react-router-dom"; // importing react-router-dom so we can link to other pages with data
 

import './componentsCSS.css' // importing css file

function Courses(props) { /*props is the data that we send to the this component*/
    const navigate = useNavigate(); // intiales an instance of the useNavigate function and use this instance to route


  

    
    const toCourse = () => {
     
      navigate("course", {state: props}); // navigate to the course page and send the course data (props [object]) to the course page
    };

    return (
        <a onClick={()=>{ toCourse()}}>    {/*when the user click on the course card it will call the toCourse function*/}        
            <div class="card course-card border-transparent">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>    {/*display the course name*/}
                    <p class="card-text">{props.id}</p>     {/*display the course id*/}
                    <p class="card-text">{props.proff}</p>  {/*display the course proff*/}
                </div>
            </div>
        </a> 

  

        )}


export default Courses;
// Path: client/src/components/courses.js
