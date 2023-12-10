const ProductsController = require('../controllers/Products.controller')

module.exports =(app)=>{
    app.get("/api/Product",ProductsController.FindAllProduct)
    app.post("/api/Product",ProductsController.CreateNewProduct)
    app.get("/api/Product/:prodId",ProductsController.showOneProduct)
    app.delete("/api/Product/:prodId",ProductsController.DeleteOneProduct)
}