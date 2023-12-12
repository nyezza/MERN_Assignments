const mongoose = require('mongoose')

const filmMaker = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"this field is required"]
    },
    Age:{
        type:Number,
        required:[true,"this field is required"]
    },
    Nationality:{
        type:String,
        required:[true,"this field is required"]
    }
},{timestamps:true})

const filmMakerSchema = mongoose.model("filmMakerSchema",filmMaker)
module.exports = {filmMakerSchema,filmMaker}