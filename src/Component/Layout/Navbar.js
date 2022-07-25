// import { Button } from "bootstrap";
import React from "react";
import { Link , NavLink} from "react-router-dom";
// import Home from "../Home"
// import About from "../About"
// import Contact from "../Contact";
const Navbar = () => {
  return (
    <>
    
       <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link className="navbar-brand" to="#">
            React User
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                 Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                 About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
               {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>  */}
             </ul>
          </div>
          {/* <Link to= "/"className="btn btn-outline-primary-light">Add User</Link> */}
        </div>
      </nav> 
       
    </>
  );
};
export default Navbar;
