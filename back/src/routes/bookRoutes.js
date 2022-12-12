const express = require("express")

const bookController = require("../controllers/bookController")

const router = express.Router()

router.get("/", bookController.getAll)
router.get("/:id", bookController.getOne)

module.exports = router
