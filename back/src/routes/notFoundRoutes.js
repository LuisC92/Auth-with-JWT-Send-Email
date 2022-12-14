const notFoundRouter = require("express").Router()

const notFoundController = require("../controllers/notFoundController")

notFoundRouter.get("/", notFoundController.notFound)

module.exports = notFoundRouter
