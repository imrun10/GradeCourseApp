import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; // import the useNavigate function from react-router-dom that will help us route to other pages and pass data as we do it
import './signin.css'

function SignIn() {
  const navigate = useNavigate(); // intiales an instance of the useNavigate function and use this instance to route
  const [accountData, getAccountData] = useState([]);

  let userType = -1;

  const toApp = () =>{  
    navigate('App'); // take us to the App page
  }

  //Pages for different types...
  const toInstructorPage = () => toApp();
  const toLeadPage = () => toApp();
  const toAdminPage = () => toApp();
  const toRegistrarPage = () => toApp();

  const checkLoginInformation=()=>{
    //Get account data from database
    Axios.get("http://localhost:3001/api/accountData/").then((response) => {
      getAccountData(response.data);
    });
    //Get entered email and password
    const enteredEmail = document.getElementsByTagName("input")[0].value;
    const enteredPassword = document.getElementsByTagName("input")[1].value;
    let found = false;
    for (var i = 0; i < accountData.length; i++) {
      //Check if an account with the entered email address exists in database
      if (accountData[i].account_email === enteredEmail) {
        //if the pasword is correct for this account, go to the next page
        if (accountData[i].account_password === enteredPassword) {
          userType = accountData[i].account_type;
          switch (userType) {
            case 1: toAdminPage(); break; //IT
            case 2: toInstructorPage(); break; //Instructor
            case 3: toLeadPage(); break; //Project Lead
            case 4: toRegistrarPage(); break; //Registrar
          }
          found = true;
        }
      }
    }
    if (!found) {
      alert("Incorrect email or password");
    }
  };
  
  return(
    <div>
      <body>
        <main>
          <div class="row">
            <div class="colm-form">
              <div class="form-container">
                <input type="text" placeholder="Email address or phone number" />
                  <input type="password" placeholder="Password" />
                    <button class="btn-login" onClick={() => {checkLoginInformation()}} >{/*when the user click on the login button it will call the toApp function*/} 
                      Login
                    </button>
                    <a href="#">Forgotten password?</a>
                  </div>
              </div>
            </div>
        </main>

      </body>
    </div>
  )}
  
export default SignIn;
