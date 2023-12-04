const express = require('express')
require ('dotenv').config()
const port = process.env.port
require('./config/mongoose.config')
const app = express()
app.use(express.json(),express.urlencoded({extended:true}));
const allMyRoutes = require('./routes/joke.routes')
allMyRoutes(app);
app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})