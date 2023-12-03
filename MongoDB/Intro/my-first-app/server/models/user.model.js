const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String
    },
    age:{
        type: Number
    }
})

const User = mongoose.model('User',UserSchema);

module.exports = User;