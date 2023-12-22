// Dependencies
const mongoose = require("mongoose");

// Account schema
const instance = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
			enum: ["user", "admin"],
			default: "user",
		},
		profilePicture: {
			type: String,
			required: true,
			default:
				"https://cavalier-1hi6.onrender.com/cdn/images/test-react-logo-32x32.png",
		},
	},
	{
		timestamps: true,
	}
);

// Create and export it as a mongoose model
const modelName = "Account";
module.exports = mongoose.model(modelName, instance);
