const userRouter = require("./user");
const categoryRouter = require("./category");

function route(app) {
	app.use("/api/user", userRouter);
	app.get("/api/", function (req, res) {
		res.send("Hello");
	});
	app.get("/favicon.ico", function (req, res) {
		res.status(204);
		res.end();
	});
	app.use("/api/category", categoryRouter);
}

module.exports = route;
