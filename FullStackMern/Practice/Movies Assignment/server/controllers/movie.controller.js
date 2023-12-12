const MovieSchema = require('../models/model.movie')

// read All 
module.exports.FindAllMovies=(req,res)=>{
    MovieSchema.find()
    .then((allMovie)=>{
        res.json(allMovie)
    })
    .catch(err=>console.log(err))
}

//create one 
module.exports.CreateOneMovie=(req,res)=>{
    MovieSchema.create(req.body)
    .then(newMovie=>{
        res.json({newAdd:newMovie})
    })
    .catch(err=>console.log(err))
}

//read one
module.exports.ReadOneMovie=(req,res)=>{
    MovieSchema.findOne({_id:req.params.id})
    .then(oneMovie=>{
        res.json({movieFound:oneMovie})
    })
    .catch(err=>console.log(err))
}

//update one
module.exports.UpdateOneMovie=(req,res)=>{
    MovieSchema.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(updatedMovie=>{res.json({lastUpdateMovie:updatedMovie})})
    .catch(err=>{console.log(err)})
}

//DeleteOne
module.exports.DeleteOneMovie=(req,res)=>{
    MovieSchema.deleteOne({_id:req.params.id})
    .then(result=>{res.json({result:result})})
    .catch(err=>console.log(err))
}