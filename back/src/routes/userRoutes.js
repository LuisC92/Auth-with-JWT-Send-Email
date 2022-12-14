const userRouter = require("express").Router()

const userController = require("../controllers/userController")
const auth = require("../middlewares/auth");

userRouter.post("/",auth.createNewEmail, userController.create)
userRouter.get("/", userController.getAll)
userRouter.get("/:id", userController.getOne)

module.exports = userRouter
