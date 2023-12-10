const mongoose = require('mongoose')
require("dotenv").config()
const dbName = process.env.DB 

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
.then(()=>{console.log(`Estabilished connection to the database ${dbName}`)})
.catch(err=>{console.log("something went wrong when connecting to the database",err)})

