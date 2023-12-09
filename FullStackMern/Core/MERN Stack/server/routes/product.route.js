const ProductController = require('../controller/products.controller')

module.exports=(app)=>{
    app.get('/api/products',ProductController.FindAllProduct)
}