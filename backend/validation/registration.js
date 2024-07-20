const User = require('../models/User');

exports.isExist=(req, res)=>{
    const user1 = User.findOne({name: res.body.username});
    const user2 = User.findOne({email: res.body.email});

    if(user1 && user2){
        res.status(400).json({message: "User name and Email already used"})
    }
    else if(user1){
        res.status(401).json({message: "User name already used"})
    }
    else if(user2){
        res.status(402).json({message: "Email already used"})
    }
}