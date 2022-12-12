const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const auth = require("./middlewares/auth")

require("dotenv").config()

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

const router = express.Router()

const bookRoutes = require("./routes/bookRoutes")
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const passwordRoutes = require("./routes/passwordRoutes")


router.use("/book", auth, bookRoutes)
router.use("/user", userRoutes)
router.use("/auth", authRoutes)
router.use("/password", passwordRoutes)


app.use("/api", router)

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
