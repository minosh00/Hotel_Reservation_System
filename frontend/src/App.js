import React,{useState,useEffect} from 'react';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import All from './Components/All';
import Register from './Components/Register';
import Sysadmin from './Components/Sysadmin';
import AddRooms from  "./Components/AddRooms";
import AllRooms from  "./Components/AllRooms";
import DisplayAllRoomCustomer from  "./Components/DisplayAllRoomCustomer";
import Admin from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import Login from './Components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {

 


  return (
    <div className="App">
   
   <Router>
      <Navbar/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register"  component={Register}/>
      <PrivateRoute path="/data" roles={["admin"]} component={Home}/>
      <PrivateRoute path="/Admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/to" roles={["user"]} component={Home}/>
      <PrivateRoute path="/add" roles={["admin"]} component={AddRooms}/>
      <PrivateRoute path="/display" roles={["admin", "user"]} component={DisplayAllRoomCustomer}/>
      <PrivateRoute path="/allrooms" roles={["admin"]} component={AllRooms}/>
      <PrivateRoute path="/sysadmin" roles={["sysadmin"]} component={Sysadmin}/>
    </Router>

    </div>
  );
}

export default App;
