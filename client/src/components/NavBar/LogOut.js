import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useCookies } from 'react-cookie';
import '../style/componentsCSS.css'; // importing css file

//import app.css file
import "../../App.css"

function LogOut() {
  // removws cookies when logout button is clicked
  function refreshPage(){
    window.location.reload();
  } 
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const remove = () => {
    removeCookie('token');
    removeCookie('email');

    refreshPage();
  }
  
  return <button class="btn .course-card .card-body " onClick={()=>{remove()}}>LogOut</button>
}

export default LogOut;