/**
 * @swagger
 * tags:
 *   name: User
 *
 * /user/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user
 *                 example: quocsang@gmail.com
 *               password:
 *                 type: string
 *                 description: User password
 *                 example: 123
 *     responses:
 *       '200':
 *         description: Return User
 *       '401':
 *         description: User not found or password wrong
 *         content:
 *           application/json:
 *             example:
 *               error: "Authentication failed. Invalid email or password."
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to users
 *
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User password
 *                 example: 123
 *               username:
 *                 type: string
 *                 description: Username of the user
 *                 example: Anh Huy
 *     responses:
 *       '201':
 *         description: User registration successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User create successfully!
 *       '400':
 *         description: Bad request. Invalid input data.
 *         content:
 *           application/json:
 *             example:
 *               error: "User with the provided email already exists."
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of the user
 *
 */

/**
 * @swagger
 * /user/{id}:
 *   parameters:
 *     - name: id
 *       in: path
 *       description: ID of the user
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *         example: 655daa60fdd450011f2279f1
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *           example: 655daa60fdd450011f2279f1
 *     responses:
 *       '200':
 *         description: The User have ID
 *       '401':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: User not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to users
 *
 * /user/{id}:
 *   parameters:
 *     - name: id
 *       in: path
 *       description: ID of the user to delete
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655daa60fdd450011f2279f1
 *   delete:
 *     summary: Delete user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to delete
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 655daa60fdd450011f2279f1
 *     responses:
 *       '204':
 *         description: User deleted successfully
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
 *   name: User
 *   description: Operations related to users
 *
 * /user/lock/{id}:
 *   parameters:
 *     - name: id
 *       in: path
 *       description: ID of the user to lock
 *       required: true
 *       schema:
 *         type: string
 *         format: string
 *       example: 655daa60fdd450011f2279f1
 *   patch:
 *     summary: Lock user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to lock
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *         example: 655daa60fdd450011f2279f1
 *     responses:
 *       '200':
 *         description: User locked successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               username: anhhuy
 *               email: example@example.com
 *               password: 123
 *               isLock: true
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
