// Dependencies
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants");

// Create a new signed token
const signToken = (payload = {}, expiresIn = "12h") => {
	const token = jwt.sign(payload, JWT_SECRET, { expiresIn });

	return token;
};

// Get and authorize the token.
const authorizeBearerToken = (request, response, next) => {
	try {
		// Get token
		const token = request.headers.authorization?.split(" ")[1];

		if (!token) {
			// No token
			return response.status(400).json({
				message: "Token not provided",
			});
		}

		// Verify auth
		const auth = jwt.verify(token, JWT_SECRET);

		if (!auth) {
			// No auth
			return response.status(401).json({
				message: "Unauthorized - invalid token",
			});
		}

		request.auth = auth;
		next();
	} catch (error) {
		console.error(error);
		return response.status(401).json({
			message: "Unauthorized - invalid token",
		});
	}
};

module.exports = {
	authorizeBearerToken,
	signToken,
};
