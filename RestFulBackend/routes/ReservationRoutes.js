
const express = require("express");
const router = express.Router();
const {createBooking,getAllbooking,deleteBooking} = require("../Controllers/ReservationController");


router.post("/createBooking",createBooking);
router.get("/getAllbooking",getAllbooking);

router.delete("/removebooking",deleteBooking);



module.exports = router;
