const express = require("express");
const router = express.Router();
var ShoutoutClient = require('shoutout-sdk');
var debug = true, verifySSL = false;
var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZDk5MWJmMC1kNGU0LTExZWMtODY0MS0zOTQzMTUzY2I4ZjEiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY1MjY4Mzc4MiwiZXhwIjoxOTY4MzAyOTgyLCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjY4MDE3Iiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.Mk21zIIn-EmFzwCy3AFM2GZKSuW42pmmqVprx7hI5tw';

router.post('/sms', (req, res)=>{

 
  const data = req.body;
  console.log("Phone number",data.number);
// Usage

var client = new ShoutoutClient(apiKey, debug, verifySSL);
var message = {
 "content": {"sms": "Hello Your Resevation is  Successfull..!"},
 "destinations": [data.number],
 "source": "ShoutDEMO",
 "transports": ["SMS"]
};

client.sendMessage(message, (error, result) => {
 if (error) {
  console.error('Error sending message!',error);
 } else {
  console.log('Sending message successful!',result);
 }
});





});


module.exports = router;