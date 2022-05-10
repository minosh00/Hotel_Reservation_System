import axios from 'axios';

let rooms = "http://localhost:5000/" + "Room/getAllRooms/";
let addNewRoom = "http://localhost:5000/" + "Room/AddRoom/";
let GetAllRooms = "http://localhost:5000/" + "Room/getRoomsById/";
let UpdateIdById = "http://localhost:5000/" + "Room/updateRoomById/";


export async function getAllRooms() { 
    return await axios.get(rooms);
}


export async function AddRoom(data) {
    const alldata = {
        RoomID:data.RoomID,
        RoomTypes:data.RoomTypes,
        Price:data.Price,
        Description:data.Description
       
    }

    console.log("url",addNewRoom);
  
    return await axios.post(addNewRoom,alldata);
}


export async function getRoomsById(ID) { 
    let newurl = GetAllRooms + ID;
    return await axios.get(newurl);
}



export async function updateRoomById(data,ID) {
    const alldata = {
        
        RoomID:data.RoomID,
        RoomTypes:data.RoomTypes,
        Price:data.Price,
        Description:data.Description
    }
    let newurl = UpdateIdById + ID;
  
    return await axios.post(newurl,alldata);
}

