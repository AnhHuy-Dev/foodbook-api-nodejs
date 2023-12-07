const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const route = require("./routes/index");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("./public/swagger.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const options = {
// 	definition: {
// 		openapi: "3.0.0",
// 		info: {
// 			title: "Book API",
// 			version: "1.0.0",
// 			description: "A simple Express Book API",
// 		},
// 		servers: [
// 			{
// 				url: "https://foodbook-api-nodejs.vercel.app/api",
// 			},
// 		],
// 	},
// 	apis: ["./routes/*.js"],
// };

// const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));
route(app);
//database connect
const db = require("./config/db");
const { json } = require("express");
db.connect();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server started on port " + PORT));
