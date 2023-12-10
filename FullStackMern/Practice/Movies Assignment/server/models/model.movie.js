const mongoose = require('mongoose')
const filMakerSchema = require('./model.filmMaker')
const Movie= new mongoose.Schema(
    {
        Name:{
            type:String,
            required:[true,"this field is required"]
        },
        ReleasedDate:{
            type:Date,
            required:[true,"this field is required"]
        },
        Type:{
            type:Array,
            required:[true,"this field is required"]
        },
        FilmMaker:[filMakerSchema]
        
    },{timestamps:true})

    const MovieSchema = mongoose.model("MovieSchema",Movie)

    module.exports = MovieSchema