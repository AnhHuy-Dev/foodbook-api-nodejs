const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");
//@route POST /api/auth/register
//@desc Register user
//@access Public
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.delete("/:id", UserController.delete);
router.patch("/lock/:id", UserController.lock);

module.exports = router;
