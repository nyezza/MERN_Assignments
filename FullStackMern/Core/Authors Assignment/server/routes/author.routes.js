const AuthorController = require("../controllers/author.controller")



module.exports = (app) => {
    app.get("/api/authors",AuthorController.FindAllAuthor)
    app.get("/api/authors/:authorId", AuthorController.FindOneSingleAuthor)
    app.patch("/api/authors/:authorId", AuthorController.updateExistingAuthor)
    app.post("/api/authors", AuthorController.CreateNewAuthor)
    app.delete("/api/authors/:authorId", AuthorController.deleteAnExistingAuthor)
}