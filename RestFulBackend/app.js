const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://minosh:minosh@cluster0.u1yxx.mongodb.net/hotelsystem?retryWrites=true&w=majority');

mongoose.connection.on('error', err=>{

    console.log("connection failed ");

});

mongoose.connection.on('connected' , connected=>{
    console.log('connected with database ');
});

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());




const admin = require('./routes/User');
app.use('/user',admin);


const roomRoutes = require('./routes/roomRoutes')
app.use('/api/rooms',roomRoutes);


const userRoutes = require('./routes/userRoutes')
app.use('/api/User',userRoutes);



const bookingsRoute=require('./routes/bookingRoutes')
app.use('/api/bookings' , bookingsRoute)




const smsRoutes=require('./routes/smsRoutes')
app.use('/smsroute' , smsRoutes)








module.exports = app;