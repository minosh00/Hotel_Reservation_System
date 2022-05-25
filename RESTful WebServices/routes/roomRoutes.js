const express = require("express");
const Router = express.Router();
const Room = require("../model/room")
const mongoose = require("mongoose");


Router.get("/getAllRooms", async (req, res) => {
   
    try {
         const rooms = await Room.find()
    res.send(rooms)
    } catch (error) {
         return res.status(400).json({ message: 'wrong' });
    }

});


Router.post("/getRoomByid/", async(req, res) => {
     console.log(req.body);
     try {
          const room = await Room.findOne({'_id' : req.body.roomid})
          res.send(room)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
 });




 Router.put("/getRoombyid/", async(req, res) => {
     console.log(req.body);
    const {id} = req.params;
     try {
          const room = await Room.findOne({'_id' : req.body._id})
          res.send(room)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
 });





Router.get("/getallrooms", async(req, res) => {
     console.log(req.body);
     try {
          const rooms = await Room.find({})
          res.send(rooms)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});





Router.post("/addRoom", async(req, res) => {
    const { room , name,
        rentPerDay  ,description ,phoneNumber ,type ,image1 } = req.body
  
       const newroom = new Room({
            name : room,
            rentPerDay, name,
             description , phoneNumber , type , imageUrl:[image1 ] 
       })
       try {
            await newroom.save()
            res.send(' Room Added Successfully')
       } catch (error) {
            return res.status(400).json({ error });
       }
  });
  


  Router.put("/update/:id" , (req,res) =>{
     Room.findById(req.params.id)
     .then(Room =>{
         
          Room.name=req.body.name,
         Room.rentPerDay=req.body.rentPerDay,
         Room.description=req.body.description,
         Room.phoneNumber=req.body.phoneNumber,
         Room.type=req.body.type,
      
 
         Room
         .save()
         .then(() => res.json("Room was updated successfully"))
         .catch(err => res.status(400).json(`${err}`));
     })
     .catch(err => res.status(400).json(`${err}`));
 });
 








 Router.delete("/:id", (req, res)=>{
     Room.findByIdAndDelete(req.params.id)
     .then(( )=> res.json("THIS Room WAS DELETE SUCCESFULLY "))
     .catch(err=> res.status(400).json(`${err}`)) 
 
 });

  module.exports = Router