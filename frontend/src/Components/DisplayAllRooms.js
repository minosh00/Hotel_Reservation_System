import React, { useState, useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function DisplayAllRooms({ room, fromdate, todate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row m-3 p-3 bs">
      <div className="col-md-4">
        <img src={room.imageUrl[0]} className="img-fluid" />
      </div>
      <div className="col-md-8">
      <b>Room Name</b>
        <h2>{room.name}</h2>
        <b>Hotel facilities</b>
        <p>
          {" "}
          24 hour front desk &nbsp; &nbsp; ,Business Center, &nbsp; &nbsp;
          Fitness Center &nbsp; &nbsp; ,Lounge/Bar &nbsp; &nbsp; ,Internet
          Access - Free in room &nbsp; &nbsp;, Contactless check-in and
          check-out
        </p>

      
        <p>
          <b>Type : {room.type}</b>
        </p>
        <p>
          <b>rent Per Day : {room.rentPerDay}</b>
        </p>
        

        <div style={{ float: "right" }}>
          {fromdate && todate && (
            <Link to={`/booking/${room._id}/${fromdate}/${todate}`}>
              <button className="btn btn-dark m-2">Book </button>
            </Link>
          )}

          <Link to="/home">
            <button className="btn btn-primary">view </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DisplayAllRooms;

//Room.js