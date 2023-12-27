const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json(), express.urlencoded({ extended: true }), cors());


require("dotenv").config()
require("./config/mongoose.config")

const port = process.env.PORT

const Routes = require("./routes/note.routes")
Routes(app)


app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port}`)
})