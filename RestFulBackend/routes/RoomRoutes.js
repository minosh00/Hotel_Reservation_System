const express = require("express");
const router = express.Router();
const {RemoveRoom,updateRoomById , getAllRooms , getRoomsById ,AddRoom} = require("../Controllers/RoomController");


router.post("/AddRoom",AddRoom);
router.get("/getAllRooms",getAllRooms);
router.get("/getRoomsById/:id",getRoomsById);
router.delete("/RemoveRoom/:id",RemoveRoom);
router.patch("/updateById/:id",updateRoomById);


module.exports = router;
