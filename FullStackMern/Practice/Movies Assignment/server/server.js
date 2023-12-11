const express = require ('express')
const cors = require('cors')
const app = express()

app.use(express.json(),express.urlencoded({extended:true}),cors())

require("dotenv").config()
require("./config/mongoose.config")
const port=process.env.port
const filmMakerRoutes= require("./routes/filmMaker.route")
const movieRoutes = require('./routes/movie.route')
filmMakerRoutes(app);
movieRoutes(app);

// require('./routes/filmMaker.route')(app)
// require('./routes/movie.route')(app)

app.listen(port,()=>{
    console.log(`>>>>>> Server is running on port ${port}`);
})