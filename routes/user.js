const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");
//@route POST /api/auth/register
//@desc Register user
//@access Public
router.get("/", UserController.getAll);
router.get("/:id", UserController.getOne);
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.delete("/:id", UserController.delete);
router.patch("/lock/:id", UserController.lock);
router.put("/:id", UserController.update);

module.exports = router;
