const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user');



// router.get('/fakeuser',async (req,res)=>{

//     const user = new User({
//          username: "Kshitiz",
//          email: "kshitiz@gmail.com"
//     });

//    //Register model has to be called onto User model
//    const newUser = await User.register(user,'kshitiz123')
//    //Sending new user to frontend
//    res.send(newUser); 

// });

//View the signup form
router.get('/register',(req,res)=>{
    res.render('auth/signup');
});

// Register new user
router.post('/register',async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const user = new User({
        username: username,
        email:email
    });
    await User.register(user, password);
    req.flash('success', `Welcome ${username},Please login to enter`);
    res.redirect('/visitors');
    }


    catch(e)
    {
        req.flash('error',e.message);
        res.redirect('/register');
    }
});




module.exports = router;