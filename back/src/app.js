const express = require("express")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const {setUpRoutes} = require("./routes/index")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.APP_FRONTEND || "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
)

setUpRoutes(app)

module.exports = app
