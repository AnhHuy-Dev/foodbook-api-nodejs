const User = require("../models/User");
require("dotenv").config();

class UserController {
	//POST /register
	async register(req, res, next) {
		//check fox existing user
		const { email, password, username } = req.body;

		try {
			const user = await User.findOne({ email });
			if (user) return res.status(400).json({ success: false, message: "Duplicate username" });

			//all goood
			const newUser = new User({ email, password, username });
			await newUser.save();

			//Return token
			res.json({ success: true, message: "User create successfully!" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//POST /login
	async login(req, res, next) {
		const { email, password } = req.body;

		try {
			const user = await User.findOne({ email });
			if (!user) return res.status(400).json({ success: false, message: "Incorrect username" });

			//check pass
			if (password !== user.password) return res.status(400).json({ success: false, message: "Incorrect password" });

			//All good
			//Return token
			res.status(200).json({ success: true, message: "Loggesd in successfully!", user });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//DETE /:id
	async delete(req, res, next) {
		try {
			const user = await User.findById({ _id: req.params.id });

			if (!user) return res.status(401).json({ success: false, message: "User not found or user not authorised" });

			const deletedUser = await User.deleteOne({ _id: req.params.id });

			res.json({ success: true, message: "Deleted successfully!" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//PATCH /:id
	async lock(req, res, next) {
		try {
			const user = await User.findById({ _id: req.params.id });
			if (!user) return res.status(400).json({ success: false, message: "User not found" });

			const updatedUser = await User.findOneAndUpdate(
				{ _id: req.params.id },
				{
					email: user.email,
					password: user.password,
					username: user.username,
					isLock: !user.isLock,
				}
			);

			res.json({ success: true, message: "Lock or unLock successfully!", updatedUser });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//GET
	async getAll(req, res, next) {
		try {
			const users = await User.find({});

			res.json(users);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//GET
	async getOne(req, res, next) {
		try {
			const user = await User.findOne({ _id: req.params.id });

			if (!user) return res.status(404).json({ success: false });

			res.json(user);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//POST
	async update(req, res, next) {
		const { email, password, username } = req.body;
		try {
			let updatedUser = {
				email,
				password,
				username,
			};

			updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, updatedUser, { new: true });

			//user not authorised or post not found
			if (!updatedUser) return res.status(401).json({ success: false, message: "User not found or user not authorised" });
			res.json({ success: true, message: "Excellent progress!", updatedUser });
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
}

module.exports = new UserController();
