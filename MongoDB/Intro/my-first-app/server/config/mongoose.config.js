const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/UserSchema')
.then(()=>console.log('db connected'))
.catch(err =>console.log('db not connected' , err));