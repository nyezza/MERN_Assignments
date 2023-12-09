const mongoose = require('mongoose')

const Products=new mongoose.Schema({
    Title:{
        type:String,
        required:[true,'this field is required']},
    Price:{
        type:Number,
        required:[true,'this field is required']},
    
    Description: {
        type:String,
        required:[true,'this field is required']
    }
},{timestamps:true})

const ProductSchema=mongoose.model("ProductSchema",Products)

module.exports = ProductSchema;