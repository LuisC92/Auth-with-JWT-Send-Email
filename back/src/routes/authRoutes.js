const authRouter = require("express").Router();
const authController = require("../controllers/authController")
const auth = require("../middlewares/auth")

authRouter.post("/login", auth.checkEmail, authController.login)
authRouter.get("/logout", auth.authorization, authController.logout)

module.exports = authRouter
