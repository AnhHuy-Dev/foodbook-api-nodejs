const express = require("express");
const router = express.Router();
const CategoryController = require("../app/controllers/CategoryController");

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getOne);
router.delete("/:id", CategoryController.delete);
router.put("/:id", CategoryController.update);

module.exports = router;
