const express = require("express")
const passwordController = require("../controllers/passwordController")

const router = express.Router()

router.post("/change-password", passwordController.change)
router.post("/reset-password", passwordController.reset)

module.exports = router