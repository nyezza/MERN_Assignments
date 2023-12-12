
const {filmMakerSchema} = require('../models/model.filmMaker')

//read All
module.exports.findAllFilmMaker=(req,res)=>{
    filmMakerSchema.find()
    .then((allFilmMaker)=>{
        res.json(allFilmMaker)
    })
}

//create One film maker
module.exports.CreateNewFilMaker=(req,res)=>{
    filmMakerSchema.create(req.body)
    .then(NewFilMaker=>{
        res.json({newMaker:NewFilMaker})})
    .catch(err=>console.log(err))
}

//Read One 
module.exports.ReadOneFilmMaker=(req,res)=>{
    filmMakerSchema.findOne({_id:req.params.id})
    .then(oneFilmMaker=>{
        res.json({filmMakerFound:oneFilmMaker})
    })
    .catch(err=>console.log(err))
}