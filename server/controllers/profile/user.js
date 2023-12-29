// Dependencies
const Account = require("../../models/Account");

// Return the user object from the database for use in the profile system.
async function user(request, response) {
	const username = request.params.username;

	// Check if the username was provided.
	if (!username) {
		return response.status(400).json({ error: "No username provided!" });
	}

	// Try to get the user object from the database
	// and only send the safe, public data fields.
	const user = await Account.findOne({ username }).select(
		"username role profilePicture createdAt updatedAt _id"
	);

	if (!user) {
		// User was not found in the database.
		return response.status(401).json({ error: "User was not found!" });
	}

	// User exists in the database, and we send the safe object to the requester.
	return response.send(user);
}

// Export
module.exports = user;
