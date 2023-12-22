// Dependencies
const mongoose = require("mongoose");
const { MONGO_URI } = require("../constants");
const { MONGO_OPTIONS } = require("../constants");

// Connect and handle errors from MongoDB
class MongoDB {
	constructor() {
		this.mongoose = mongoose;
		this.isConnected = false;
		this.MONGO_URI = MONGO_URI;
		this.MONGO_OPTIONS = MONGO_OPTIONS;
	}

	async connect() {
		if (this.isConnected) return;

		try {
			// Fix a warning
			this.mongoose.set("strictQuery", false);

			// Connect to MongoDB
			const db = await this.mongoose.connect(
				this.MONGO_URI,
				this.MONGO_OPTIONS
			);

			const connection = db.connection;

			// Successfully connected
			this.isConnected = connection.readyState === 1;
			if (this.isConnected) console.log("🔥 MongoDB connected.");

			// Re-connected
			connection.on("connected", () =>
				console.log("🔥 MongoDB connected.")
			);

			// Disconnected
			connection.on("disconnected", () =>
				console.log("❌ MongoDB disconnected.")
			);

			// Listen for errors during the session
			connection.on("error", (error) =>
				console.log("❌ MongoDB connection error: ", error)
			);
		} catch (error) {
			console.log("❌ MongoDB connection error:", error.message);
		}
	}
}

module.exports = new MongoDB();
