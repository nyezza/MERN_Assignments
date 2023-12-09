const ProductSchema = require('../model/model.product')

// Read All

module.exports.FindAllProduct=(req,res)=>{
    ProductSchema.find()
    .then((allProduct)=>{
        console.log(allProduct);
        res.json(allProduct)
    })
    .catch(err=> {res.json({message:"wait",Error:err})})
}