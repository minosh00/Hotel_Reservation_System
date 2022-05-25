const mongoose = require("mongoose");

const taxiSchema = mongoose.Schema({
  vehiclename: {
    type: String,
    required: true,
  },



  phoneNumber: { type: String, required: true },
 
  type: { type: String, required: true },

});

const taxiModel = mongoose.model("taxi", taxiSchema);

module.exports = taxiModel;