const bookRouter = require("express").Router()

const bookController = require("../controllers/bookController")
const auth = require("../middlewares/auth")

bookRouter.get("/", auth.checkAuth ,bookController.getAll)
bookRouter.get("/:id",auth.checkAuth , bookController.getOne)

module.exports = bookRouter
