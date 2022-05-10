import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Admin = () => (
  <div className="container">
    <br></br>
    <br></br>
    <h1>Welcome to System Admin page </h1>
    <br></br>
    <br></br>
    <Link to="/dashboard">
      <button type="button" class="btn btn-primary">
        All Reservation
      </button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/add">
      <button type="button" class="btn btn-primary">
        add new Rooms
      </button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/allrooms">
      <button type="button" class="btn btn-primary">
        manage all rooms
      </button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/display">
      <button type="button" class="btn btn-primary">
        All Customers
      </button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
);

export default Admin;
