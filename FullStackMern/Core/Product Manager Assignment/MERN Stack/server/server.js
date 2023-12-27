const express = require('express')
const cors = require('cors')

const app=express()
app.use(express.json(),express.urlencoded({extended:true}),cors());
require("dotenv").config()

require('./config/mongoose.config')
const port = process.env.port

const Routes= require('./routes/products.routes')
Routes(app)

app.listen(port, ()=>{console.log(`>>>>>> Server is running on port ${port}`);})