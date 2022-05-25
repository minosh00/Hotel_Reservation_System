import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sysadmin = ()=>(
   
    <div className="container">
        <br></br><br></br>
    <h1>Welcome to System Admin page   </h1>
    <Link to="/allReservation">
      <button type="button" class="btn btn-primary">
        All Reservation
      </button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/adminroom">
      <button type="button" class="btn btn-primary">
        manage Room
      </button>
    </Link>
  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/ManageAllUsers">
      <button type="button" class="btn btn-primary">
      Manage All Users
      </button>
    </Link>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Link to="/adminregister">
      <button type="button" class="btn btn-primary">
      Add Admin (Admin  register)
      </button>
    </Link>


              
    </div>
)

export default Sysadmin;