const express = require("express");
const Router = express.Router();
const Taxi = require("../model/Taxi")
const mongoose = require("mongoose");


Router.get("/getAlltaxi", async (req, res) => {
   
    try {
         const taxi = await Taxi.find()
    res.send(taxi)
    } catch (error) {
         return res.status(400).json({ message: 'wrong' });
    }

});


Router.post("/addtaxi", async(req, res) => {
    const { taxi , vehiclename,
        rentPerDay  ,vehicleNumber ,phoneNumber ,type } = req.body
  
       const newtaxi = new Taxi({
        vehiclename : taxi,
         vehiclename, phoneNumber , type 
       })
       try {
            await newtaxi.save()

            res.send(' Taxi  Added Successfully')
            
       } catch (error) {

            return res.status(400).json({ error });
       }
  });


  
  module.exports = Router
  
