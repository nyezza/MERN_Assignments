const mongoose = require('mongoose')
const dbName = process.env.DB 

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
.then(()=>console.log(`connection estabilished to the database ${dbName}`))
.catch(err => console.log(`something went wrong when connection to the database`,err))
