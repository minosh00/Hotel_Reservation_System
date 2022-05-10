const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../model/User');

const signToken = userID =>{
    return JWT.sign({
        iss : "Minosh",
        sub : userID
    },"Minosh",{expiresIn : "2h"});
}


//register

userRouter.post('/register',(req,res)=>{

    const { username,password,role ,email} = req.body;

    User.findOne({username},(err,user)=>{

        if(err)
        res.status(500).json({message : {msgBody : "Error has occurred", msgError: true}});

        if(user)
        res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});


        else{
            const newUser = new User({username,password,role,email});

            newUser.save(err=>{

                if(err)
                res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
            else
                res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            });
        }
    });
});



//login



userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{


    if(req.isAuthenticated()){
        const {_id,username,role} = req.user;
        const token = signToken(_id);

        res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 

        res.status(200).json({isAuthenticated : true,user : {username,role}});

    }
});



// logout



userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{


    res.clearCookie('access_token');
    res.json({user:{username : "", role : ""},success : true});

});



//admin user role 
userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
});


//Supervisor user role 
userRouter.get('/sysadmin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'sysadmin'){
        res.status(200).json({message : {msgBody : 'You are an Supervisor', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an Supervisor,go away", msgError : true}});
});


userRouter.get("/alldata", (req, res) =>{
    User.find()
  
  
    .then(User =>res.json(User))
   .catch(err => res.status(400).json(`${err}`));
    
});

// all account login authenticated 


userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});


   module.exports = userRouter;

