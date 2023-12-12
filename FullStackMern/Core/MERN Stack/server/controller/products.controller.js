const ProductSchema = require('../model/model.product');

// Read All
module.exports.FindAllProduct=(req,res)=>{
    ProductSchema.find()
    .then((allProduct)=>{
        //console.log(allProduct);
        res.json(allProduct)
    })
    .catch(err=> {res.json({message:"wait",Error:err})})
}

// Create One
module.exports.CreateNewProduct=(req,res)=>{
    ProductSchema.create(req.body)
    .then(CreateProduct => {
        res.json({newProduct:CreateProduct})
    })
}

// Find One
module.exports.FindOneProduct=(req,res)=>{
    ProductSchema.findOne({_id:req.params.id})
    .then(oneProduct =>{
        res.json(oneProduct)
    })
    .catch(err=>console.log(err))
}

// Delete one
module.exports.DeleteOneProduct=(req,res)=>{
    ProductSchema.deleteOne({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err =>console.log(err))
}

//Update 
module.exports.UpdateOneProduct=(req,res)=>{
    ProductSchema.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(result=>res.json({"Message":result}))
    .catch(err =>console.log(err))
}