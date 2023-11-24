const Recipe = require("../models/Recipe");
require("dotenv").config();

class RecipeController {
	//GET
	async getAllCheckUser(req, res, next) {
		try {
			const recipes = await Recipe.find({ user: req.params.userId, isCheck: true });
			res.json(recipes);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
	//GET
	async getOne(req, res, next) {
		try {
			const recipe = await Recipe.findOne({ _id: req.params.id });

			res.json(recipe);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//POST
	async create(req, res, next) {
		const { userId, categoryId, name, image, ingredients, steps } = req.body;

		try {
			const newRecipe = new Recipe({
				name,
				image,
				ingredients,
				steps,
				user: userId,
				category: categoryId,
			});

			await newRecipe.save();
			res.json({ success: true, message: "Create new post success", newRecipe });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	async getAllCheck(req, res, next) {
		try {
			const recipes = await Recipe.find({ isCheck: true });
			res.json(recipes);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	async getAllUncheck(req, res, next) {
		try {
			const recipes = await Recipe.find({ isCheck: false });
			res.json(recipes);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	async delete(req, res, next) {
		try {
			const deletedRecipe = await Recipe.deleteOne({ _id: req.params.id });
			if (!deletedRecipe) return res.status(401).json({ success: false, message: "Post not found or user not authorised" });

			res.json({ success: true, message: "Deleted successfully!" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	async checkRecipe(req, res, next) {
		try {
			const recipe = await Recipe.findById({ _id: req.params.id });
			if (!recipe) return res.status(400).json({ success: false, message: "Recipe not found" });

			const updatedRecipe = await Recipe.findOneAndUpdate(
				{ _id: req.params.id },
				{
					name: recipe.name,
					image: recipe.image,
					ingredients: recipe.ingredients,
					steps: recipe.steps,
					user: recipe.user,
					category: recipe.category,
					isCheck: true,
				}
			);

			res.json({ success: true, message: "Lock or unLock successfully!", updatedRecipe });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	async favorite(req, res, next) {
		try {
			const recipe = await Recipe.findById({ _id: req.params.id });
			if (!recipe) return res.status(400).json({ success: false, message: "Recipe not found" });
			const userId = recipe.userFavorites.find((item) => item === req.params.userId);
			if (userId !== undefined) return res.status(400).json({ success: false, message: "Favorited" });

			const updatedRecipe = await Recipe.findOneAndUpdate(
				{ _id: req.params.id },
				{
					name: recipe.name,
					image: recipe.image,
					ingredients: recipe.ingredients,
					steps: recipe.steps,
					user: recipe.user,
					$push: { userFavorites: req.params.userId },
					category: recipe.category,
					isCheck: true,
				}
			);

			res.json({ success: true, message: "Favorite successfully!" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	async getFavoriteRecipe(req, res, next) {
		try {
			const recipes = await Recipe.find({ userFavorites: { $in: req.params.userId } });
			res.json(recipes);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
	async unFavorite(req, res, next) {
		try {
			const recipe = await Recipe.findById({ _id: req.params.id });
			if (!recipe) return res.status(400).json({ success: false, message: "Recipe not found" });

			const userId = recipe.userFavorites.find((item) => item === req.params.userId);
			if (userId === undefined) return res.status(400).json({ success: false, message: "User don't favorite" });

			const updatedRecipe = await Recipe.findOneAndUpdate(
				{ _id: req.params.id },
				{
					name: recipe.name,
					image: recipe.image,
					ingredients: recipe.ingredients,
					steps: recipe.steps,
					user: recipe.user,
					$pull: { userFavorites: req.params.userId },
					category: recipe.category,
					isCheck: true,
				}
			);

			res.json({ success: true, message: "Unfavorite successfully!" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
}

module.exports = new RecipeController();
