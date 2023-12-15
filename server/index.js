require("dotenv").config();
const app = require("./utils/app");
const mongo = require("./utils/mongo");
const { PORT } = require("./constants");
const authRoutes = require("./routes/auth");

async function bootstrap() {
	// Connect to MongoDB
	await mongo.connect();

	// Test route
	app.get("/", (req, res) =>
		res.status(200).json({ message: "Hello World!" })
	);

	// Health check
	app.get("/health", (req, res) => res.status(200).send());

	// Use the auth routes
	app.use("/auth", authRoutes);

	// Run Express app
	app.listen(PORT, () => {
		console.log(`✅ Server is listening on port: ${PORT}`);
	});
}

bootstrap();
