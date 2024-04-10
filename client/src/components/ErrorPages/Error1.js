// all users will be redirected to this page if they try to access a page that does not exist

import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom"; // import the useNavigate function from react-router-dom that will help us route to other pages and pass data as we do it
function Error1() {
  const navigate = useNavigate();
  
  const toApp = () => {
    navigate("/App");}

    return (
      <div>
        <body>
          <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
              <h1 class="display-1 fw-bold">Error 1</h1>
              <p class="fs-3">
                {" "}
                Table <span class="text-danger">Not Found</span> 
              </p>
              <p class="lead small-txt"> 1. Check your internet connection</p>
              <p class="lead small-txt"> 2. Restart your browser</p>
              <p class="lead small-txt"> 3. Send a screenshot of page to IT</p>

              <button class="btn btn-primary" onClick={()=>{toApp()}}>
                Go Home
                </button>
            </div>
          </div>
        </body>
      </div>
    );
}

export default Error1;