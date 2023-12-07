/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Operations related to categories
 *
 * /category:
 *   post:
 *     summary: Add a new category
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the category
 *                 example: New Category
 *               description:
 *                 type: string
 *                 description: Description of the category
 *                 example: This is a new category
 *     responses:
 *       '201':
 *         description: Category added successfully
 *         content:
 *           application/json:
 *             example:
 *               _id: 655b00d2cf6a45c073637e5d
 *               name: New Category
 *               description: This is a new category
 *       '400':
 *         description: Bad request. Invalid input data.
 *         content:
 *           application/json:
 *             example:
 *               error: "Invalid input data. Please check your category details."
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
 *   name: Category
 *
 * /category:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Category
 *     responses:
 *       '200':
 *         description: List all Category
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
 *   name: Category
 *   description: Operations related to categories
 *
 * /category/{id}:
 *   parameters:
 *     - name: id
 *       in: path
 *       description: ID of the category to retrieve
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655b00d2cf6a45c073637e5d
 *   get:
 *     summary: Get category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to retrieve
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 655b00d2cf6a45c073637e5d
 *     responses:
 *       '200':
 *         description: Category have ID
 *       '404':
 *         description: Category not found
 *         content:
 *           application/json:
 *             example:
 *               error: "Category not found"
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
 *   name: Category
 *   description: Operations related to categories
 *
 * /category/{id}:
 *   parameters:
 *     - name: id
 *       in: path
 *       description: ID of the category to delete
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655b00d2cf6a45c073637e5d
 *   delete:
 *     summary: Delete category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to delete
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 655b00d2cf6a45c073637e5d
 *     responses:
 *       '204':
 *         description: Category deleted successfully
 *       '404':
 *         description: Category not found
 *         content:
 *           application/json:
 *             example:
 *               error: "Category not found"
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
 *   name: Category
 *   description: Operations related to categories
 *
 * /category/{id}:
 *   parameters:
 *     - name: id
 *       in: path
 *       description: ID of the category to update
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655b00d2cf6a45c073637e5d
 *   put:
 *     summary: Update category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to update
 *         required: true
 *         schema:
 *           type: integer
 *           format: string
 *         example: 655b00d2cf6a45c073637e5d
 *       - name: name
 *         in: query
 *         description: New name for the category
 *         required: false
 *         schema:
 *           type: string
 *           example: Updated Category
 *       - name: description
 *         in: query
 *         description: New description for the category
 *         required: false
 *         schema:
 *           type: string
 *           example: This category has been updated
 *     responses:
 *       '200':
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             example:
 *               _id: 655b00d2cf6a45c073637e5d
 *               name: Updated Category
 *               description: This category has been updated
 *       '404':
 *         description: Category not found
 *         content:
 *           application/json:
 *             example:
 *               error: "Category not found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal server error"
 */

const express = require("express");
const router = express.Router();
const CategoryController = require("../app/controllers/CategoryController");

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getOne);
router.delete("/:id", CategoryController.delete);
router.put("/:id", CategoryController.update);

module.exports = router;
