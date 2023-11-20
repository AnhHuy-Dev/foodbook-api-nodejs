const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	ingredients: {
		type: String,
		required: true,
	},
	steps: {
		type: String,
		required: true,
	},
	isCheck: {
		type: Boolean,
		default: false,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: "categories",
	},
});

module.exports = mongoose.model("recipes", RecipeSchema);
