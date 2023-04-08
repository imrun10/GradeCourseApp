import 'bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap
import { useNavigate } from "react-router-dom"; // importing react-router-dom so we can link to other pages with data
 
import { ReactComponent as Logo } from '../media/AUBH-Logo.svg'; // this is how we import svg files

import '../App.css' // importing css file

function Navbar() { /*props is the data that we send to the this component*/
    const navigate = useNavigate(); // intiales an instance of the useNavigate function and use this instance to route


  

    const toSignIn = () => {
        navigate("/", ); // navigate to the course page and send the course data (props [object]) to the course page
    };
    const toApp = () => {
     
      navigate("app", ); // navigate to the course page and send the course data (props [object]) to the course page
    };

    return (
        <div class="navbar">
        <Logo class="logo" />
        <button class="btn sign-out">sign out</button>
        </div>)}


export default Navbar;
// Path: client/src/components/courses.js
