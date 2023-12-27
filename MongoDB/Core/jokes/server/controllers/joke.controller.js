
const Joke = require('../models/joke.model')

module.exports.findAllJokes=(req , res)=>{
    Joke.find()
    .then((allJokes)=>{
        res.json({Joke:allJokes})
    })
    .catch(err=> res.json({message:'something went wrong',error:err}))
}

module.exports.findOneJoke=(req,res)=>{
    Joke.findOne({_id:req.params.id})
    .then(oneSingleJoke => res.json({Joke:oneSingleJoke}))
    .catch(err => res.json({message:"something went wrong",error:err}))
}

module.exports.createJoke=(req,res)=>{
    const {body}=req
    Joke.create(body)
    .then(newJoke => res.json({Joke:newJoke}))
    .catch(err=>res.json({message:"something went wrong",error:err}))
}

module.exports.updateOneJoke=(res,req)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then(updatedJoke=> res.json({Joke:updatedJoke}))
    .catch(err => res.json({message:"something went wrong",error:err}))
}

module.exports.deleteOneJoke=(res,req)=>{
    joke.deleteOne({_id:req.params.id})
    .then(result=>res.json({result:result}))
    .catch(err=>res.json({message:"something went wrong",error:err}))
}