const express = require("express");
const router = express.Router();
var ShoutoutClient = require("shoutout-sdk");
var debug = true,
  verifySSL = false;
  var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ODY5ZTA2MC1kNmQzLTExZWMtYjUyZS1iNzgyMGNjNWI3MjUiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY1Mjg5NjM3NSwiZXhwIjoxOTY4NTE1NTc1LCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjY4MTAzIiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.WY4fnECHbnybOxsTLUY3VY3m2SDMoyMr23a8AKsvrXY';

router.post("/sms", (req, res) => {
  const data = req.body;
  console.log("Phone number", data.number);
  // Usage

  var client = new ShoutoutClient(apiKey, debug, verifySSL);
  var message = {
    content: { sms: "Hello Your Resevation is  Successfull..!" },
    destinations: [data.number],
    source: "ShoutDEMO",
    transports: ["SMS"],
  };

  client.sendMessage(message, (error, result) => {
    if (error) {
      console.error("Error sending message!", error);
    } else {
      console.log("Sending message successful!", result);
    }
  });
});

module.exports = router;
