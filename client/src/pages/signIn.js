import react from "react";
import { useNavigate, createBrowserRouter, RouterProvider, Route,Link } from "react-router-dom";

import './signin.css'
function SignIn() {
  const navigate = useNavigate();


  const toApp=()=>{
    navigate('App');
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
                    <button class="btn-login" onClick={() => {toApp()}}>
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
