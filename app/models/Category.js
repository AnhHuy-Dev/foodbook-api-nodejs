const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("categories", CategorySchema);
