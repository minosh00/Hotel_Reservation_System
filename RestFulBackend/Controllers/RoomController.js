const mongoose = require('mongoose');
const Rooms = require("../model/Room");



const getAllRooms = async (req, res) => { 
    try {
        const room = await Rooms.find();
                 
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getRoomsById = async (req, res) => { 
    const { id } = req.params;

    try {
        const room = await Rooms.findById(id);
        
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const AddRoom = async (req, res) => {
    const room = req.body;

    const newRooms = new Rooms({ ...room, creator: req.userId })

    try {
        await newRooms.save();

        res.status(201).json(newRooms );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const updateRoomById = async (req, res) => {
    const { id } = req.params;
    const { RoomID, RoomTypes , Price,Description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No rooms with id: ${id}`);

    const updateRoom = { RoomID, RoomTypes , Price ,Description, _id:id};

    await Rooms.findByIdAndUpdate(id, updateRoom, { new: true });

    res.json(updateRoom);
}

const RemoveRoom = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No more room with id: ${id}`);

    await Rooms.findByIdAndRemove(id);

    res.json({ message: "room remove successfully." });
}


module.exports ={RemoveRoom,updateRoomById , getAllRooms , getRoomsById ,AddRoom};