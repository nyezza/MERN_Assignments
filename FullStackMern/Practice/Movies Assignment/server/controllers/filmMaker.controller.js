const filmMakerSchema = require('../models/model.filmMaker')

//read All
module.exports.findAllFilmMaker=(req,res)=>{
    filmMakerSchema.find()
    .then((allFilmMaker)=>{
        res.json(allFilmMaker)
    })
}

module.exports.CreateNewFilMaker=(req,res)=>{
    filmMakerSchema.create(req.body)
    .then(NewFilMaker=>{
        res.json({newMaker:NewFilMaker})})
    .catch(err=>console.log(err))
}