const mongoose = require('mongoose');
const Reservation = require("../model/Reservation");
const Rooms = require("../model/Room");
const Customer = require('../model/User');


const getAllbooking = async (req, res) => { 
    try {
        const data = [];
        const Reservations = await Reservation.find();
        for(let i =0;i<Reservations.length;i++){
            const RoomID = Reservations[i].ReseveRoomID;
            const userID = Reservations[i].ReservedCustomer;
            const Room = await Rooms.findById(RoomID);
            const Customers = await Customer.findById(userID);
            data.push({res: Reservations[i], Room: Room , User :Customers});
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}


const createBooking = async (req, res) => {

    const Reservations = req.body;
    const newBooking = new Reservation({ ...Reservations, creator: req.userId })
    console.log(" data",newBooking);
    try {
        await newBooking.save();

        res.status(201).json(newBooking );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



const deleteBooking = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No booking with id: ${id}`);

    await Reservation.findByIdAndRemove(id);

    res.json({ message: "booking deleted successfully." });
}






module.exports ={createBooking,getAllbooking,deleteBooking};
