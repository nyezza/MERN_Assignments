const mongoose = require("mongoose")


const Author = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "the Title is required"],
        minLength: [3, "the name must be at least 3 characters"]
    }
}, { timestamps: true })


const AuthorSchema = mongoose.model("AuthorSchema", Author)

module.exports = AuthorSchema