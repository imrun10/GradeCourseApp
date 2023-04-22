// all users will be redirected to this page if they try to access a page that does not exist

import react from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom"; // import the useNavigate function from react-router-dom that will help us route to other pages and pass data as we do it
function NotFound() {
  const navigate = useNavigate();
  
  const toApp = () => {
    navigate("App");}

    return (
      <div>
      <header>
      <Navbar />
      </header>
        <body>
          <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
              <h1 class="display-1 fw-bold">404</h1>
              <p class="fs-3">
                {" "}
                <span class="text-danger">Opps!</span> Page not found.
              </p>
              <p class="lead small-txt"> 1. Redo your search</p>
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

export default NotFound;