const mongoose = require("mongoose")


const Note = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "the Title is required"],
        minLength: [2, "Title must be more than 2 characters"]
    },
    Content: {
        type: String,
        minLength: [5, "Content must be more than 5 characters"]
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const NoteSchema = mongoose.model("NoteSchema", Note)

module.exports = NoteSchema