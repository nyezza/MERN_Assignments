const mongoose = require('mongoose')
const {filmMaker} = require('./model.filmMaker')
const Movie= new mongoose.Schema(
    {
        Title:{
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
        FilmMaker:{
            type:String
            //type:{filmMaker},
            //required:[false,"this field is required"]
        },
        IdMaker:{
            type:String
        }
        
        
    },{timestamps:true})

    const MovieSchema = mongoose.model("MovieSchema",Movie)

    module.exports = MovieSchema