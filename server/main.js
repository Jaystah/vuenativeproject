const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

const keys = require('./keys')

mongoose.connect(keys.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });
 
 mongoose.connection.on("connected",function(){
 console.log("Succesfully connected");
 })
 
 mongoose.connection.on("error",function(err){
    console.log("Error: ", err);
 })

require('./model/users');
require('./model/jweets');
app.use(express.json());
app.use(require('./routes/authenticate'));
app.use(require('./routes/jweets'));


app.listen(PORT,()=>{
    console.log('Server running on', PORT);
})