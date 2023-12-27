const NoteController = require("../controllers/note.controller")



module.exports = (app) => {
    app.get("/api/note", NoteController.FindAllNote)
    app.get("/api/note/:noteId", NoteController.FindOneSingleNote)
    app.patch("/api/note/:noteId", NoteController.updateExistingNote)
    app.post("/api/note", NoteController.CreateNewNote)
    app.delete("/api/note/:noteId", NoteController.deleteAnExistingNote)
}