import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AddRoom } from "../Services/RoomService";

const AddRooms = () => {
  // const navigate = useNavigate();

  const [RoomID, setRoomID] = useState("");
  const [RoomTypes, setRoomTypes] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");

  const handleRoomID = (e) => {
    setRoomID(e.target.value);
  };

  const handleRoomTypes = (e) => {
    setRoomTypes(e.target.value);
  };

  const handlemodel = (e) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddNewItem = async (e) => {
    e.preventDefault();
    if (
      RoomID === "" ||
      RoomTypes === "" ||
      Price === "" ||
      Description === ""
    ) {
      alert("Insert All the data");
    } else {
      let newdata = {
        RoomID: RoomID,
        RoomTypes: RoomTypes,
        Price: Price,
        Description: Description,
      };
      let data = await AddRoom(newdata);
      console.log("Item return data", data);
      alert("add new room successfully");
    }
  };

  return (
    <div>
      <br />
      <div>
        <center>
          <h1>Add new Room</h1>
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example1">
                Room id{" "}
              </label>
              <input
                type="text"
                onChange={handleRoomID}
                value={RoomID}
                id="form4Example1"
                placeholder="enter room id "
                class="form-control"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example1">
                Room type{" "}
              </label>
              <input
                type="text"
                onChange={handleRoomTypes}
                value={RoomTypes}
                placeholder="enter room types (A/C/NON AC)"
                id="form4Example1"
                class="form-control"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example1">
                Room Price{" "}
              </label>
              <input
                type="text"
                value={Price}
                placeholder="enter Room Price"
                onChange={handlemodel}
                id="form4Example1"
                class="form-control"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form4Example3">
                description
              </label>
              <textarea
                class="form-control"
                id="form4Example3"
                value={Description}
                placeholder="enter Room Description"
                onChange={handleDescription}
                rows="4"
              ></textarea>
            </div>

            <button
              onClick={handleAddNewItem}
              className="btn btn-primary"
              type="submit"
            >
              ADD
            </button>
          </form>
        </center>

        <Link to="/admin">
          <button type="button" class="btn btn-primary">
            back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddRooms;
