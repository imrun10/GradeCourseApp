import React, { useEffect } from "react";
import "./login.css";
import Userfront from "@userfront/react";
import { useState } from "react";
import axios from "axios";
import { useCookies, Cookies } from 'react-cookie';
import { useNavigate, redirect} from "react-router-dom";


function Login() {

  const [firstNameReg, setFirstNameReg] = useState();
  const [lastNameReg, setLastNameReg] = useState();
  const [passwordReg, setPasswordReg] = useState ();
  const [emailReg, setEmailReg] = useState();

  const [usernameLog, setUernameLog] = useState();
  const [passwordLog, setPasswordLog] = useState ();
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

 
  // redirect to main page if token cookies and email cookies are set
  var emailCookie = cookies.email;
  var tokenCookie = cookies.token;

  useEffect(() => {
    check();}
    );
  
    const check = () => {if(!(emailCookie == null || tokenCookie == null)){
  navigate("/")}}

  const register = async () => {
    alert("register");
    const response = await axios.post("http://localhost:3001/api/register", {
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      if(response.data.status === 1){
        alert("User Created Successfully");
        setCookie('token', response.data.token,[{path: '/'}]);
        setCookie('email', response.data.email,[{path: '/'}]);
        setCookie('security', 1,[{path: '/'}]);

        refreshPage();

      }
      else if(response.data.status === 2){
        alert("User Already Exist");
      }
      else if(response.data.status === 3){
        alert("Password Already Exist");
      }
      else if(response.data.status === 0){
        alert("Fill in all fields");
      }

})};

function refreshPage(){
  window.location.reload();
} 
  const loggin = async () => {
    console.log("erq")
    alert("login");
    const responeL = await axios.post("http://localhost:3001/api/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      if(response.data.status === 1){
        alert("User Logged In Successfully");
        setCookie('email', response.data.email,[{path: '/'}]);
        setCookie('token', response.data.token,[{path: '/'}])

        refreshPage();

      }
      else if(response.data.status === 2){
        alert("User Does Not Exist");
      }
      else if(response.data.status === 3){
        alert("Password Does Not Exist");
      
      }
      else if(response.data.status === 0){
        alert("Fill in all fields");}
      })
  }

  return (<div>
    <div class="App">
    <div class="registration">
           <h1>Registration</h1>
           <label>Email</label>
           <input type="text" onChange={(e) =>{
              setEmailReg(e.target.value);
           }}  /><br/>
           <label>First Name</label>
           <input type="text" onChange={(e) =>{
              setFirstNameReg(e.target.value);
           }}  /><br/>
            <label>Last Name</label>
            <input type="text" onChange={(e) =>{
              setLastNameReg(e.target.value);
            }}  /><br/>
           <label>password</label>
           <input type="password" onChange={(e) =>{
              setPasswordReg(e.target.value);
           }} /> <br />
           <button onClick={()=>{register()}}> Register</button>
        </div>

        <div class="login">
           <h1>Login</h1>
           <input type="text" placeholder="Username…" onChange={(e) =>{
              setUernameLog(e.target.value);
           }} /> <br/>
           <input type="password" placeholder="Password…"onChange={(e) =>{
              setPasswordLog(e.target.value);
           }} /> <br />
           <button onClick={()=>{loggin()}}>Login</button>
        </div>
    </div>
  </div>);
}


export default Login;