const Category = require("../models/Category");
require("dotenv").config();

class CategoryController {
	//GET
	async getAll(req, res, next) {
		try {
			const categories = await Category.find({});

			res.json(categories);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//POST
	async create(req, res, next) {
		const { name, description } = req.body;
		try {
			const newCategory = new Category({
				name,
				description,
			});

			await newCategory.save();
			res.json({ success: true, newCategory });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//GET
	async getOne(req, res, next) {
		try {
			const category = await Category.findOne({ _id: req.params.id });

			if (!category) return res.status(404).json({ success: false });

			res.json(category);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//DETE /:id
	async delete(req, res, next) {
		try {
			const category = await Category.findById({ _id: req.params.id });

			if (!category) return res.status(401).json({ success: false, message: "Category not found" });

			const deletedCategory = await Category.deleteOne({ _id: req.params.id });

			res.json({ success: true, message: "Deleted successfully!" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//PUT
	async update(req, res, next) {
		const { name, description } = req.body;

		try {
			const category = await Category.findById({ _id: req.params.id });

			if (!category) return res.status(401).json({ success: false, message: "Category not found" });

			const updatedCategory = await Category.findOneAndUpdate(
				{ _id: req.params.id },
				{
					name,
					description,
				}
			);

			res.json({ success: true, updatedCategory });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
}

module.exports = new CategoryController();
