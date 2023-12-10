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
    console.log(req.body);
    ProductSchema.create(req.body)
    .then(CreateProduct =>{
        console.log(CreateProduct);
        res.json({newProduct:CreateProduct})
    })
    .catch(err=>{res.json({message:"wait",err})})
}

module.exports.showOneProduct = (req,res)=>{
    console.log(req.params.prodId);
    ProductSchema.findOne({_id:req.params.prodId})
    .then(oneProduct=>{
        res.json(oneProduct)
        console.log(oneProduct);
    })
    .catch(err=>console.log(err))
}

module.exports.DeleteOneProduct=(req,res)=>{
    ProductSchema.deleteOne({_id:req.params.prodId})
    .then(result=>{res.json(result)})
    .catch(err=>{console.log(err)})
}