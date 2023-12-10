const ProductSchema= require('../models/model.product')

// read all 
module.exports.FindAllProduct =(req,res)=>{
    ProductSchema.find()
    .then((AllProducts)=>{
        //console.log(AllProducts);
        res.json(AllProducts)
    })
    .catch(err=>{res.json({message:"wait",err})})
}

// create 
module.exports.CreateNewProduct = (req,res)=>{
    ProductSchema.create(req.body)
    .then(CreateProduct =>{
        res.json({newProduct:CreateProduct})
    })
    .catch(err=>{res.json({message:"wait",err})})
}

// show one 
module.exports.showOneProduct = (req,res)=>{
    ProductSchema.findOne({_id:req.params.prodId})
    .then(oneProduct=>{
        res.json(oneProduct)
    })
    .catch(err=>console.log(err))
}

//update One
module.exports.UpdateOneProduct=(req,res)=>{
    ProductSchema.findOneAndUpdate({_id:req.params.prodId},req.body,{new:true,runValidators:true})
    .then(result=>{
        res.json({"message":result})
    })
    .catch(err=>console.log(err))
}

// Delete One
module.exports.DeleteOneProduct=(req,res)=>{
    ProductSchema.deleteOne({_id:req.params.prodId})
    .then(result=>{res.json(result)})
    .catch(err=>{console.log(err)})
}