const express = require('express');
const router = express.Router();
const User = require('../models/User');
const isExist = require('../validation/registration');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const users = await User.find();
        res.json(users);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, email, about, password } = req.body;
    const user = new User(
        {
            name ,
            email, 
            about, 
            password
        }
    )
    if(isExist(name, email).status==400){
        res.status(400).json({message:"User name and Email already used"});
    }
    else if(isExist(name, email).status==401){
        res.status(400).json({message:"User already used"});
    }
    else if(isExist(name, email).status==402){
        res.status(400).json({message:"Email already used"});
    }
    else{
        try{
            const newuser = await user.save();
            res.status(201).json(newuser);
        } catch(error){
            res.status(400).json({message:error.message});
        }
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateUser);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await User.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.post('/login', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    try{
        const response = await User.findOne({email});
        console.log(response);
        if(response){
            if(password === response.password){
                res.status(200).json({status: "success", response});
            }
            else{
                res.status(201).json({status: "incorrect password"});
            }
        } else{
            console.log("Pass");
            res.status(201).json({status: "user not found"});
        }
    } catch{
        res.status(200).json({status: "error with login"});
    }
});

module.exports = router;