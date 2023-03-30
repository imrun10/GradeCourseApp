import react from "react";
import { useNavigate } from "react-router-dom"; // import the useNavigate function from react-router-dom that will help us route to other pages and pass data as we do it

import './signin.css'
function SignIn() {
  const navigate = useNavigate(); // intiales an instance of the useNavigate function and use this instance to route


  const toApp=()=>{
    navigate('App'); // take us to the App page
      }
  
  return(
    <div>
      <body>
        <main>
          <div class="row">
            <div class="colm-form">
              <div class="form-container">
                <input type="text" placeholder="Email address or phone number" />
                  <input type="password" placeholder="Password" />
                    <button class="btn-login" onClick={() => {toApp()}} >{/*when the user click on the login button it will call the toApp function*/} 
                    Login</button>
                    <a href="#">Forgotten password?</a>
                  </div>
              </div>
            </div>
        </main>

      </body>
    </div>
  )}
  
export default SignIn;
