const express = require("express");
const router = express.Router();
const User = require("../model/user")


//register 

router.post("/register", async(req, res) => {
  
    const {name , email , password,country,phonenumber} = req.body

    const newUser = new User({name , email ,country, password,phonenumber})

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
         return res.status(400).json({ message: error });
    }

});


//login

router.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await User.find({email , password})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                phonenumber :user[0].phonenumber,
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: ' Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'error login' });
    }
  
});


router.get("/getAllUsers", async(req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});






module.exports = router

