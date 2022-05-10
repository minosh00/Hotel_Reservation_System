import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

const AllRooms = () => {
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
      <Link to="/add">
        <button type="button" class="btn btn-primary">
          Add Rooms
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/admin">
        <button type="button" class="btn btn-primary">
          back to main page
        </button>
      </Link>
      <br></br>
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th Scope="col"> #</th>
            <th Scope="col"> Room id </th>
            <th Scope="col">Room type </th>
            <th Scope="col">Room Price </th>
            <th Scope="col">Room Description </th>
            <div className="col-lg-9 mt-2 mb-2"></div>
          </tr>
        </thead>

        <tbody>
          {getAllRooms.map((admin, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>

              <td>{admin.RoomID}</td>
              <td>{admin.RoomTypes}</td>
              <td>{admin.Price}</td>

              <td>{admin.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRooms;
