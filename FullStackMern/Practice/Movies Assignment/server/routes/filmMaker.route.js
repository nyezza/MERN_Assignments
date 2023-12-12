const filmMakerController = require('../controllers/filmMaker.controller')

module.exports=(app)=>{
    app.get(`/api/filmMaker`,filmMakerController.findAllFilmMaker)
    app.post(`/api/filmMaker`,filmMakerController.CreateNewFilMaker)
    app.get(`/api/filmMaker/:id`,filmMakerController.ReadOneFilmMaker)
}