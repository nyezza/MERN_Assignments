const ProductController = require('../controller/products.controller')

module.exports=(app)=>{
    app.get('/api/products',ProductController.FindAllProduct)
    app.post('/api/products',ProductController.CreateNewProduct)
    app.get('/api/products/:id',ProductController.FindOneProduct)
    app.delete('/api/products/:id',ProductController.DeleteOneProduct)
    app.patch('/api/products/edit/:id',ProductController.UpdateOneProduct)
}