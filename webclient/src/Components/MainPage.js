import React from "react";
import Map from "./Map"
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="">
      <div className="landing row justify-content-center text-center">
        <div
          className="col-md-9 my-auto"
          style={{ borderRight: "8px solid white" }}
        >
           <br></br>
           <h2 style={{ color: "black", fontSize: "90px" }} data-aos="zoom-in">
            hotel bo0king
          </h2>


            <img class="card-img-top" src={require('./qq.jpg')} height={450} width={-10}  alt="Card image cap"/>


     
          <h1 data-aos="zoom-out">“The bestplace to booking your room" </h1>
          <Link to="/home">
            <button className="btn btn-primary">Get Started</button>
          </Link>

          <br></br>
          <br></br>
          <br></br>
          <Link to="/adminlogin">
            <button className="btn btn-primary">Admin login</button>
          </Link>

          <br></br>
    
<Map/>

        </div>
      </div>
    </div>
  );
}

export default MainPage;