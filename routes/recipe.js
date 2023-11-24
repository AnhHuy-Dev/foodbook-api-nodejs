const express = require("express");
const router = express.Router();
const RecipeController = require("../app/controllers/RecipeController");

router.get("/check", RecipeController.getAllCheck); // get recipe -check of all user
router.get("/uncheck", RecipeController.getAllUncheck); //get recipe-uncheck of all user
router.get("/user/:userId", RecipeController.getAllCheckUser); // get recipe- check of user
router.get("/:id", RecipeController.getOne); //get recipe
router.get("/favorite/:userId", RecipeController.getFavoriteRecipe);
router.patch("/favorite/:userId/:id", RecipeController.favorite);
router.patch("/unfavorite/:userId/:id", RecipeController.unFavorite);
router.post("/", RecipeController.create);
router.delete("/:id", RecipeController.delete);
router.patch("/:id", RecipeController.checkRecipe);

module.exports = router;
