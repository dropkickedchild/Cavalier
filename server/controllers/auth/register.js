// Dependencies
const joi = require("joi");
const bcrypt = require("bcrypt");
const Account = require("../../models/Account");
const { signToken } = require("../../middlewares/jsonwebtoken");

// Create a new account for the user using the Account.js schema
async function register(request, response, next) {
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

		// Verify account username as unique
		const existingAccount = await Account.findOne({ username });
		if (existingAccount) {
			return response.status(400).json({
				error: username,
				message: "That username is taken!",
			});
		}

		// Encrypt password
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		// Create account
		const newAccount = new Account({ username, password: hash });
		await newAccount.save();

		// Remove password from response data
		newAccount.password = undefined;
		delete newAccount.password;

		// Generate access token
		const token = signToken({ uid: newAccount._id, role: newAccount.role });

		// Success
		response.status(201).json({
			message: "Succesfully registered!",
			data: newAccount,
			token,
		});
	} catch (error) {
		console.error(error);
		return response.status(500).send();
	}
}

// Export
module.exports = register;
