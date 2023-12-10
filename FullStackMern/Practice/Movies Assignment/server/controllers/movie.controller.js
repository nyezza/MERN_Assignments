const MovieSchema = require('../models/model.movie')

module.exports.FindAllMovies=(req,res)=>{
    MovieSchema.find()
    .then((allMovie)=>{
        res.json(allMovie)
    })
    .catch(err=>console.log(err))
}