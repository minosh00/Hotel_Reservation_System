import axios from "axios";
import React, { useState } from "react";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddRooms = () => {
  const [name, setroom] = useState("");
  const [rentPerDay, setrentperday] = useState();
  const [description, setdescription] = useState("");
  const [phoneNumber, setphonenumber] = useState("");
  const [type, settype] = useState("");
  const [image1, setimage1] = useState("");

  const changeOnClick = (f) => {
    //f.preventDefault();

    const addroom = {
      name,
      rentPerDay,
      description,
      phoneNumber,
      type,
      image1,
    };

    axios.post("http://localhost:5000/api/rooms/addRoom", addroom);
    Swal.fire("Congrats", "New Room Added  succeessfully", "success")
      .then((res) => console.log("success"))

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container ">
        <br></br> <br></br>
      <center>
        <h1>Add a New room</h1>
        <form onSubmit={changeOnClick} encType="">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="name">room name</label>
              <br />
              <input
                type="text"
                onChange={(f) => setroom(f.target.value)}
                className="form-control"
                placeholder="name"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlfor="rentPerDay">rent Per Day</label>
              <br />
              <input
                type="text"
                onChange={(f) => setrentperday(f.target.value)}
                className="form-control"
                placeholder="rent Per Day "
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlfor="description">description</label>
              <br />
              <input
                type="text"
                onChange={(f) => setdescription(f.target.value)}
                className="form-control"
                placeholder="description"
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
            <label htmlfor="type">Room type</label>
            <br />
            <input
              type="text"
              onChange={(f) => settype(f.target.value)}
              className="form-control"
              placeholder="type"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlfor="image1">image</label>
            <br />
            <input
              type="text"
              onChange={(f) => setimage1(f.target.value)}
              className="form-control"
              placeholder="upload  image  url "
            />
          </div>

          <br />
          <br />

          <button type="submit" className="btn btn-primary">
            Add new room
          </button>
        </form>
      </center>
      <Link to="/Admin">
        <button type="button" class="btn btn-primary">
          back to admin
        </button>
      </Link>
      <br></br> <br></br>
    </div>
  );
};

export default AddRooms;