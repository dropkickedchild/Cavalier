// Axios and Cors
const ORIGIN = "*";
const PORT = process.env.PORT || 8080;

// MongoDB
const MONGO_URI = process.env.MONGO_URI;
const MONGO_OPTIONS = {};

// JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Export secrets
module.exports = {
	ORIGIN,
	PORT,
	MONGO_URI,
	MONGO_OPTIONS,
	JWT_SECRET,
};
