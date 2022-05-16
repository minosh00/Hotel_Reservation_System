import React from "react";
import { Link } from "react-router-dom";
function NavBar() {

    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href='/login'
      }

      
  return (
    <div>
      <nav class="navbar  bg-primary navbar-expand-lg">
        <a class="navbar-brand">
         Hotel Reservation
        </a>
       
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">

        <ul class="navbar-nav ml-auto">

{localStorage.getItem('currentUser') ? (
  <div class="dropdown mr-5">
  <button class="btn btn-secondary dropdown-toggle" type="button"  aria-haspopup="true" aria-expanded="false">
  <i class="fa fa-user" aria-hidden="true"></i>  {JSON.parse(localStorage.getItem('currentUser')).name}  </button>
  
  <div id="myDropdown" class="dropdown-content" >

  <a class="dropdown-item" href="/profile">Profile</a>
  <a class="dropdown-item" href="#" onClick={logout}>Logout</a>

  </div>

 
</div> 
     ) : (
        <>
       

        <li class="nav-item active">
          <a class="navbar-item"   href="/register">
            Register
          </a>
        </li>
  
    
        <li class="nav-item">
          <a class="navbar-item" href="/login">
            Login As Customer 
          </a>
        </li>
        </>
        )}
       
      </ul>
    </div>
  </nav>
</div>
);
}


export default NavBar;