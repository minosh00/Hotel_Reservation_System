 

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Taxi = () => {
  const [vehiclename, setvehiclename] = useState("");
  const [phoneNumber, setphonenumber] = useState("");
  const [type, settype] = useState("");

  const changeOnClick = (f) => {
    //f.preventDefault();

    const addtaxi = {
       vehiclename,
      phoneNumber,
      type,
    
    };





    axios.post("http://localhost:5000/Taxi/addtaxi/", addtaxi);
    Swal.fire("Congrats", "New taxi Added  succeessfully", "success")
      .then((res) => console.log("success"))

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container ">
        <br></br> <br></br>
      <center>
        <h1>Add a New taxi services </h1>
        <form onSubmit={changeOnClick} encType="">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="name">vehicle name</label>
              <br />
              <input
                type="text"
                onChange={(f) => setvehiclename(f.target.value)}
                className="form-control"
                placeholder="vehicle name "
              />
            </div>

      

          </div>

          <div className="form-group col-md-6">
            <label htmlfor="phoneNumber">phone Number </label>
            <input
              type="text"
              onChange={(f) => setphonenumber(f.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlfor="type">vehicle  type</label>
            <br />
            <input
              type="text"
              onChange={(f) => settype(f.target.value)}
              className="form-control"
              placeholder="type"
            />
          </div>

         
          <br />
          <br />

          <button type="submit" className="btn btn-primary">
            Add taxi
          </button>
        </form>
      </center>
    
      <br></br> <br></br>
    </div>
  );
};

export default Taxi;
