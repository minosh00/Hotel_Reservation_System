import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sysadmin = ()=>(
   
    <div className="container">
        <br></br><br></br>
    <h1>Welcome to System Admin page   </h1>
    <Link to="/">
                    <li className="nav-item nav-link">
                       All Reservations 
                    </li>
                </Link>  

              
    </div>
)

export default Sysadmin;