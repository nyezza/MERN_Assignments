const MovieController = require('../controllers/movie.controller')

module.exports=(app)=>{
    app.get(`/api/movies`,MovieController.FindAllMovies)
    app.post(`/api/movies`,MovieController.CreateOneMovie)
    app.get('/api/movies/:id',MovieController.ReadOneMovie)
    app.patch('/api/movies/edit/:id',MovieController.UpdateOneMovie)
    app.delete('/api/movies/:id',MovieController.DeleteOneMovie)
}