const mongoose = require('mongoose')

const dbName = process.env.DB;

mongoose.connect(`mongodb://127.0.0.1:27017/product_manger_db}`)
.then(()=>console.log(`Estabilished connection to the database ${dbName}`))
.catch(err=>console.log("something went wrong",err))