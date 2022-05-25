import React, { useState, useEffect } from "react";
import Register from "./Components/Register";
import Sysadmin from "./Components/Sysadmin";
import Admin from "./Components/Admin";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import Login from "./Components/Login";
import BookingRoom from "./Components/BookingRoom";
import Homescreen from "./Components/MainPage";
import Mainpage from "./Components/Home";
import NavBar from "./Components/NavBar";
import UserLogin from "./Components/UserLogin";
import RegisterUser from "./Components/RegisterUser";
import UserProfile from "./Components/UserProfile";
import AdminNarBar from "./Components/AdminNarBar";
import AllReservationAdmin from "./Components/AllReservationAdmin";
import ManageAllRooms from "./Components/ManageAllRooms";
import AddRooms from "./Components/AddRooms";
import ManageAllUsers from "./Components/ManageAllUsers";
import UpdateRooms from "./Components/UpdateRooms";
import Mailer from "./Components/Mailer";
import Sms from "./Components/Sms";

import Taxi from "./Components/Taxi";


import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  const[room , setPosts] = useState([])


  useEffect(() => {
    
    axios.get('http://localhost:5000/api/rooms/getallrooms/')
    .then(res => setPosts(res.data) )
    .catch(error => console.log(error));


  })

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route path="/" exact component={Homescreen} />
        <Route path="/home" component={Mainpage} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/AdminNarBar" component={AdminNarBar} />
        <Route path="/login" component={UserLogin} />
        <Route path="/adminlogin" component={Login} />
        <Route path="/adminregister" component={Register} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/Mailer" component={Mailer} />
        <Route path="/Sms" component={Sms} />
        <Route path="/Taxi" component={Taxi} />


        <Route path="/update/:id"    render={(props)=>  <UpdateRooms {...props} posts={room} />} />
        <PrivateRoute path="/Admin" roles={["admin" , "sysadmin"]} component={Admin} />
        <PrivateRoute
          path="/allReservation"
          roles={["admin" ,"sysadmin"]}
          component={AllReservationAdmin}
        />
        <PrivateRoute
          path="/adminroom"
          roles={["admin" ,"sysadmin"]}
          component={ManageAllRooms}
        />
        <PrivateRoute
          path="/ManageAllUsers"
          roles={["admin" ,"sysadmin"]}
          component={ManageAllUsers}
        />

        <Route path="/AddRooms" component={AddRooms} />

        <Route
          path="/booking/:roomid/:fromdate/:todate"
          component={BookingRoom}
        />
        <PrivateRoute
          path="/sysadmin"
          roles={["sysadmin"]}
          component={Sysadmin}
        />
      </Router>
    </div>
  );
}

export default App;