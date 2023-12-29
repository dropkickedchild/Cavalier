// Dependencies
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = require("./utils/app");
const mongo = require("./utils/mongo");
const { PORT } = require("./constants");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

// Run on startup
// Connect to MongoDB and initalizes all the routes
async function main() {
	// Connect to MongoDB
	await mongo.connect();

	// Health check
	app.get("/api/v1/status", (req, res) => res.status(200).send());

	// External routes
	app.use("/api/v1/auth", authRoutes); // Authentication
	app.use("/api/v1/profile", profileRoutes); // Profiles

	// CDN
	app.use("/cdn", express.static("cdn"));

	// Unknown endpoint/asset
	app.get("*", (req, res) => {
		//res.status(404).json({ message: "Unknown endpoint/asset", code: 404 });

		res.setHeader("Content-Type", "text/html");
		res.sendFile(path.join(__dirname, "./public/404.html"));
	});

	// Run Express app
	app.listen(PORT, () => {
		console.log("🔥 Server connected.");
	});
}

main();
