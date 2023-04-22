import React from "react";
import Userfront from "@userfront/react";
import { useCookies, Cookies } from 'react-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import "./componentsCSS.css"
import '../App.css' // importing css file


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