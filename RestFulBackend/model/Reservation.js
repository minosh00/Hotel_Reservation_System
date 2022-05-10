const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({

	ResevedNo: {
		type: String,
		required: true,
	},
    ReseveRoomID: {
        type: String, 
        required: true,
    },
    ReservedCustomer: {
        type: String, 
		required: true,
    },
    
    StartDate: {
        type: String,
        required: true,
    },
    ENdDate: {
        type: String,
        required: true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Resevation = mongoose.model("booking", BookingSchema);


