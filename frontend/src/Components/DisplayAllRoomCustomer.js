 
   

 import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

const DisplayAllRoomCustomer = () => {
  const [getAllRooms, setUserRouter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Room/getAllRooms/")
      .then((res) => setUserRouter(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container">
      <br></br>
      <br></br>
   
      <table className="table">
        <thead>
      
        </thead>

        <tbody>
          {getAllRooms.map((admin) => (
            <tr >
         
<div class="row"  aria-hidden="true">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Room ID::: {admin.RoomID}</h5>
        <p class="card-text" >Room Types :::{admin.RoomTypes}</p>
    <p class="card-text">Room Description:::: {admin.Description}</p>
    <p class="card-text">Room Price ::${admin.Price}</p>
        <button type="button" class="btn btn-primary">
           Buy
        </button>
      </div>
    </div>
  </div>
 
</div>

<br></br>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllRoomCustomer;
