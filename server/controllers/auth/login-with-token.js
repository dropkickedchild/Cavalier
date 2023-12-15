// Dependencies
const Account = require("../../models/Account");
const { signToken } = require("../../middlewares/jsonwebtoken");

// Log the user in using the cookie/token
async function loginWithToken(request, response, next) {
	try {
		const { uid } = request.auth;

		// Get account from MongoDB
		const foundAccount = await Account.findOne({ _id: uid }).select(
			"-password"
		);

		// Generate access token
		const token = signToken({
			uid: foundAccount._id,
			role: foundAccount.role,
		});

		// Success
		response.status(200).json({
			message: "Account fetched",
			data: foundAccount,
			token,
		});
	} catch (error) {
		console.error(error);
		response.status(500).send();
	}
}

// Export
module.exports = loginWithToken;
