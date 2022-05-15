

 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import { Link } from "react-router-dom";

function ManageAllUsers() {

    const[users , setusers] = useState()
    const[loading , setloading] = useState(true)
    useEffect(async() => {
  
      try {
        const data = await (await axios.get('/api/User/getAllUsers')).data
        setusers(data)
        setloading(false)
      } catch (error) {
        console.log(error)
        setloading(false)
      }
      
    }, [])
  
    return(
      <div className='row'>
            {loading && (<Loader/>)}
  
         <div className="col-md-10">
         <br></br>
    <br></br>
         <Link to="/Admin">
      <button type="button" class="btn btn-primary">
        back to admin
      </button>
    </Link>
    <br></br>
    <br></br>
         <table className='table table-bordered table-dark'>
             <thead className='bs'>
               <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Email</th>
         
               </tr>
             </thead>
           
           <tbody>
  
          
  
            {users && (users.map(user=>{
              return <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              
              </tr>
            }))}
             </tbody>
            </table>
         </div>
      </div>
    )
  
  }



















    export default ManageAllUsers;