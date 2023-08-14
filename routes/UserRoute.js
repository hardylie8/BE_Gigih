const express = require("express");
const router = express.Router();
const authGuard = require("../middleware/authGuard");
const userController = require("../controllers/UserController");

router.get("/", authGuard, userController.getUser);

module.exports = router;
