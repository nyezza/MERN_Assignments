const express = require("express")
const cors = require("cors")

const app = express()
const cookieParser = require('cookie-parser');

app.use(cookieParser());



app.use(express.json(), express.urlencoded({ extended: true }), cors({credentials: true, origin: 'http://localhost:3000'}));


require("dotenv").config()
require("./config/mongoose.config")

const port = process.env.PORT

const myFirstSecret = process.env.FIRST_SECRET_KEY
const mySecondSecret = process.env.SECOND_SECRET_KEY
const Routes = require("./routes/author.routes")
Routes(app)


app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port}`)
})