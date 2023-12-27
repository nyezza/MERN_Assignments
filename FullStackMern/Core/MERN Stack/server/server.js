const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors(),express.json(),express.urlencoded({extended:true}))
require('dotenv').config()
require("./config/mongoose.config")
//const port = process.env.port
const port=5000

const Routes= require('./routes/product.route')
Routes(app)


app.listen(port,()=>{console.log(`>>>> server is running on port ${port}`)})

