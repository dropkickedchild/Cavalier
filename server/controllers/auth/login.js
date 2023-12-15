// Dependencies
const joi = require("joi");
const bcrypt = require("bcrypt");
const Account = require("../../models/Account");
const { signToken } = require("../../middlewares/jsonwebtoken");

// Log the user in
async function login(request, response, next) {
	try {
		// Validate request data

		await joi
			.object({
				username: joi.string().required(),
				password: joi.string().required(),
			})
			.validateAsync(request.body);
	} catch (error) {
		// Could not validate

		return response.status(400).json({
			error: "ValidationError",
			message: error.message,
		});
	}

	try {
		const { username, password } = request.body;

		// Get account from MongoDB, and verify existance
		const foundAccount = await Account.findOne({ username });

		if (!foundAccount) {
			return response.status(400).json({
				message: "Account does not exist.",
			});
		}

		// Decrypt and verify password
		const passOk = await bcrypt.compare(password, foundAccount.password);

		if (!passOk) {
			return response.status(400).json({
				message: "Incorrect username or password!",
			});
		}

		// Remove password from response data
		foundAccount.password = undefined;
		delete foundAccount.password;

		// Generate access token
		const token = signToken({
			uid: foundAccount._id,
			role: foundAccount.role,
		});

		// Success
		response.status(200).json({
			message: "Succesfully logged in!",
			data: foundAccount,
			token,
		});
	} catch (error) {
		console.error(error);
		response.status(500).send();
	}
}

// Export
module.exports = login;
