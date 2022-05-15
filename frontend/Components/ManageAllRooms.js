import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import { Link } from "react-router-dom";

function ManageAllRooms() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);



  const deleteRoom = id=>{


    axios.delete(`http://localhost:5000/api/rooms/${id}`)
  
    .then(res => alert(res.data))
       
    setrooms(rooms.filter(elem => elem._id !== id ));
    }



  useEffect(async () => {
    try {
      setloading(true);
      const data = await (
        await axios.get("http://localhost:5000/api/rooms/getallrooms")
      ).data;
      setrooms(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);
  return (
    <div className="col-md-11">
        <br></br>
    <br></br>
        <Link to="/Admin">
  
      <button type="button" class="btn btn-primary">
        back to admin
      </button>
    </Link>
    <br></br>   <br></br>   <br></br>
    <Link to="/AddRooms">
  
  <button type="button" class="btn btn-primary">
    Add Room
  </button>
</Link>

    <br></br>
      <h1>Rooms</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>
                <th>Room Id</th>
                <th>Name</th>
                <th>Type</th>
                <th>Rent Per day</th>

                <th>Phone Number</th>
                <th>delete</th>
                <th>update</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>{room.rentPerDay}</td>
                    <td>{room.phoneNumber}</td>
                    <td><button  onClick={() => deleteRoom(room._id)}    className="btn btn-danger" style={{marginTop:'10px'}}>&nbsp;delete
      </button></td>

      <td><Link to={`/update/${room._id}`} 

className="btn btn-warning" style={{marginTop:'13px'}}>

<i class="fas fa-edit"></i>&nbsp;Edit </Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ManageAllRooms;
