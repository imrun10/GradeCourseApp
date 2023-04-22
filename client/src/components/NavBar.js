import 'bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap
import { useNavigate } from "react-router-dom"; // importing react-router-dom so we can link to other pages with data
import { useCookies, Cookies } from 'react-cookie';
import { ReactComponent as Logo } from '../media/AUBH-Logo.svg'; // this is how we import svg files

import '../App.css' // importing css file
import LogOut from './LogOut'; // importing the logout component
import { useEffect } from 'react';
function Navbar() { /*props is the data that we send to the this component*/
    const navigate = useNavigate(); // intiales an instance of the useNavigate function and use this instance to route
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    useEffect(() => {
      loggedOut();}
      );
    function loggedOut(){
      //check if there are no cookies if there are none it will log u out
      if(cookies.token == null || cookies.email == null){
         navigate("/login");
      }
    }
    const toSignIn = () => {
        navigate("/", ); // navigate to the course page and send the course data (props [object]) to the course page
    };
    const toApp = () => {
     
      navigate("/", ); // navigate to the course page and send the course data (props [object]) to the course page
    };

    return (
        <div class="navbar">
        <Logo class="logo" onClick={()=>toApp()}/>
        <div onClick={()=>{toApp()}}>
        <h1 class="title" id="title">GRADE APP </h1></div>
        <LogOut />
        </div>)}


export default Navbar;
// Path: client/src/components/courses.js
