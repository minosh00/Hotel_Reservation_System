const express = require('express');
const app = express();
const  RoomRoutes = require('./routes/RoomRoutes');
const  ReservationRoutes = require('./routes/ReservationRoutes');
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




const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.use("/Room",RoomRoutes);

app.use("/booking",ReservationRoutes);













module.exports = app;