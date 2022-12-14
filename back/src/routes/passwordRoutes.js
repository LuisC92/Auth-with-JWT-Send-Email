const passwordRouter = require("express").Router()

const passwordController = require("../controllers/passwordController")


passwordRouter.post("/change-password", passwordController.change)
passwordRouter.post("/reset-password", passwordController.reset)
passwordRouter.post("/forget-password", passwordController.forget)

module.exports = passwordRouter