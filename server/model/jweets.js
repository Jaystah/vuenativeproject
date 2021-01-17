const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const {Date} = mongoose.Schema.Types;
const jweetSchema = mongoose.Schema({
    message : {
        type: String,
        required: true
    },
    time : {
        type : Date,
        required: true
    },
    user : {
        type: ObjectId,
        ref: "Users"
    }
    
})
mongoose.model("Jweets",jweetSchema)