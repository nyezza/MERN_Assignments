const mongoose = require ('mongoose')

const Product = new mongoose.Schema({
    Title: {
        type: String,
        require:[true,"The Title is required"]
    },
    Price: {
        type: Number,
        require:[true,"The Title is required"]
    },
    Description: {
        type: String,
        require:[true,"The Title is required"]
    }
},{timestamps:true})

const ProductSchema = mongoose.model("ProductSchema", Product)

module.exports=ProductSchema;