const NoteSchema = require("../models/note.model")



//? Read All

module.exports.FindAllNote = (req, res) => {
    // db.Note.find()
    NoteSchema.find()
        .then((AllNotes) => {
            console.log(AllNotes)
            res.json(AllNotes)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}



//? Create

module.exports.CreateNewNote = (req, res) => {
    // db.Note.insertOne({fistName:65454})
    console.log(req.body)
    NoteSchema.create(req.body)
        .then(CreateNote => {
            console.log(CreateNote)
            res.json({ newNote: CreateNote })
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? Read One

module.exports.FindOneSingleNote = (req, res) => {
    NoteSchema.findOne({ _id: req.params.noteId })
        .then(oneSingleNote => {
            res.json(oneSingleNote)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingNote = (req, res) => {
    NoteSchema.deleteOne({ _id: req.params.noteId })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? UPDATE

module.exports.updateExistingNote = (req, res) => {
    console.log(req.body);
    NoteSchema.findOneAndUpdate({ _id: req.params.noteId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch(err => {
            res.status(400).json(err)
        })

}