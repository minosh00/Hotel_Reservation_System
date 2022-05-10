const mongoose = require("mongoose");

const RoomAddSchema = new mongoose.Schema({
	RoomID: {
		type: String,
		required: true,
	},
	
	RoomTypes: {
		type: String,
		required: true,
	},
	Price: {
		type: String,
		required: true,
	},
	Description: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Room = mongoose.model("room", RoomAddSchema);
