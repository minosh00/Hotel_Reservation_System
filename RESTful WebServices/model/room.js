const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  imageUrl: [],
  phoneNumber: { type: String, required: true },
  rentPerDay: { type: String, required: true },
  type: { type: String, required: true },
});

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;