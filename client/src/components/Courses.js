import 'bootstrap/dist/css/bootstrap.min.css';

import './componentsCSS.css'
function Courses(props) {
    return (

        

        <div class="card" id="course-card">
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                 <p class="card-text">{props.id}</p>
                 <p class="card-text">{props.proff}</p>
           </div>
        </div>
  

        )}


export default Courses;
// Path: client/src/components/courses.js
