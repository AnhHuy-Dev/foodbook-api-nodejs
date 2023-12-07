/**
* @swagger
 tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe:
 *   post:
 *     summary: Add a new recipe
 *     tags:
 *       - Recipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user creating the recipe
 *                 example: 655daa60fdd450011f2279f1
 *               categoryId:
 *                 type: string
 *                 description: ID of the category for the recipe
 *                 example: 655d01a75f902bc41384bfe8
 *               name:
 *                 type: string
 *                 description: Name of the recipe
 *                 example: "Nui xào bò"
 *               image:
 *                 type: string
 *                 description: URL or path to the recipe image
 *                 example: "https://example.com/spaghetti.jpg"
 *               ingredients:
 *                 type: string
 *                 description: List of ingredients for the recipe
 *                 example: nui;bò
 *               steps:
 *                 type: array
 *                 description: List of steps to prepare the recipe
 *                 example: xào;luộc;nêm
 *     responses:
 *       '201':
 *         description: Recipe added successfully
 *         content:
 *           application/json:
 *             example:
 *               _id: 65622cf43952a25f9e63841f
 *               userId: 655daa60fdd450011f2279f1
 *               categoryId: 655d01a75f902bc41384bfe8
 *               name: Nui xào bò
 *               image: "https://example.com/spaghetti.jpg"
 *               ingredients: nui;bò
 *               steps: xào;luộc;nêm
 *       '400':
 *         description: Bad request. Invalid input data.
 *         content:
 *           application/json:
 *             example:
 *               error: "Invalid input data. Please check your recipe details."
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe/check:
 *   get:
 *     summary: Get all check recipes
 *     tags:
 *       - Recipe
 *     responses:
 *       '200':
 *         description: List all check recipes
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe/uncheck:
 *   get:
 *     summary: Get all uncheck recipes
 *     tags:
 *       - Recipe
 *     responses:
 *       '200':
 *         description: List all uncheck recipes
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe/user/{userId}:
 *   parameters:
 *     - name: userId
 *       in: path
 *       description: ID of the user to retrieve recipes
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655daa60fdd450011f2279f1
 *   get:
 *     summary: Get all recipes of a user
 *     tags:
 *       - Recipe
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: ID of the user to retrieve recipes
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 655daa60fdd450011f2279f1
 *     responses:
 *       '200':
 *         description: List recipes of user
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /favorite/{userId}:
 *   parameters:
 *     - name: userId
 *       in: path
 *       description: ID of the user
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655daa60fdd450011f2279f1
 *   get:
 *     summary: Get all favorite recipes of a user
 *     tags:
 *       - Recipe
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: ID of the user
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 655daa60fdd450011f2279f1
 *     responses:
 *       '200':
 *         description: List all recipe of user have ID
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */
/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe/{recipeId}:
 *   parameters:
 *     - name: recipeId
 *       in: path
 *       description: ID of the recipe to retrieve
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 65622cf43952a25f9e63841f
 *   get:
 *     summary: Get a specific recipe by ID
 *     tags:
 *       - Recipe
 *     parameters:
 *       - name: recipeId
 *         in: path
 *         description: ID of the recipe to retrieve
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 65622cf43952a25f9e63841f
 *     responses:
 *       '200':
 *         description: Recipe have ID
 *       '404':
 *         description: Recipe not found
 *         content:
 *           application/json:
 *             example:
 *               error: "Recipe not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe/{recipeId}:
 *   parameters:
 *     - name: recipeId
 *       in: path
 *       description: ID of the recipe to delete
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 65622cf43952a25f9e63841f
 *   delete:
 *     summary: Delete recipe by ID
 *     tags:
 *       - Recipe
 *     parameters:
 *       - name: recipeId
 *         in: path
 *         description: ID of the recipe to delete
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 65622cf43952a25f9e63841f
 *     responses:
 *       '204':
 *         description: Recipe deleted successfully
 *       '404':
 *         description: Recipe not found
 *         content:
 *           application/json:
 *             example:
 *               error: "Recipe not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /recipe/{recipeId}:
 *   patch:
 *     summary: Handle check recipe have ID
 *     tags:
 *       - Recipe
 *     parameters:
 *       - name: recipeId
 *         in: path
 *         description: ID of the recipe to delete
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 65622cf43952a25f9e63841f
 *     responses:
 *       '200':
 *         description: Check recipe successfully
 *         content:
 *           application/json:
 *             example:
 *               _id: "65622cf43952a25f9e63841f"
 *               name: "Nui xào bò"
 *               image: "http://res.cloudinary.com/dqwkdrxtt/image/upload/v1700932851/scfnnpek8yhtukgam5yi.png"
 *               ingredients: "nui;bò"
 *               steps: "xào;luộc;nêm"
 *               isCheck: true
 *               userFavorites: ["65662af7e874172f077f5b42"]
 *               user: "655daa60fdd450011f2279f1"
 *               category: "655d01a75f902bc41384bfe8"
 *       '404':
 *         description: Recipe not found
 *         content:
 *           application/json:
 *             example:
 *               error: "Recipe not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /favorite/{userId}/{recipeId}:
 *   parameters:
 *     - name: userId
 *       in: path
 *       description: ID of the user
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 65622cf43952a25f9e63841f
 *     - name: recipeId
 *       in: path
 *       description: ID of the recipe
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 65662af7e874172f077f5b42
 *   patch:
 *     summary: Handle favorite recipe for user
 *     tags:
 *       - Recipe
 *     responses:
 *       '200':
 *         description: Favorite status updated successfully
 *       '404':
 *         description: User or recipe not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User or recipe not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Operations related to recipes
 *
 * /unfavorite/{userId}/{recipeId}:
 *   parameters:
 *     - name: userId
 *       in: path
 *       description: ID of the user
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 65622cf43952a25f9e63841f
 *     - name: recipeId
 *       in: path
 *       description: ID of the recipe
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 65662af7e874172f077f5b42
 *   patch:
 *     summary: Handle unfavorite recipe for user
 *     tags:
 *       - Recipe
 *     responses:
 *       '200':
 *         description: Unfavorite status updated successfully
 *       '404':
 *         description: User or recipe not found
 *         content:
 *           application/json:
 *             example:
 *               error: "User or recipe not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

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
