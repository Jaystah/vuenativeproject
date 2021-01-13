const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jweets = mongoose.model("Jweets");

const requireLogin = require('../mw/requireLogin')

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }

router.post('/api/jweet',requireLogin,(req,res)=>{
    console.log('received')
    const {message} = req.body;
    const date = new Date().addHours(1);
    if(!message){
        return res.status(422).json({error: "Please add a message"})
    }

    const jweet = new jweets({
        message,
        time : date,
        user: req.user
    })

    jweet.save().then(result=>{
        res.json({jweet: result});
    }).catch(error=>{
        console.log(error);
    })
})


router.get('/api/getJweets',requireLogin,(req,res)=>{
    jweets.find().populate("user","_id firstName lastName email").then(post=>{
        res.json({post})
    })
})


module.exports = router;