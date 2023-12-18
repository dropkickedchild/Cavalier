// Dependencies
require("dotenv").config();
const axios = require("axios");
const app = require("./utils/app");
const mongo = require("./utils/mongo");
const { PORT } = require("./constants");
const authRoutes = require("./routes/auth");

// Run on startup
// Connect to MongoDB and initalizes all the routes
async function main() {
	// Connect to MongoDB
	await mongo.connect();

	// Debug route
	app.get("/", (req, res) => {
		console.log("Debug route was pinged."); // Debug message
		res.status(200).json({ message: "OK" });
	});

	// Health check
	app.get("/health", (req, res) => res.status(200).send());

	// Use external routes
	app.use("/auth", authRoutes);

	// Run Express app
	app.listen(PORT, () => {
		console.log(`✅ Server is listening on port: ${PORT}`);
	});
}

main();
