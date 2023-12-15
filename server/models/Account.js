const mongoose = require("mongoose");

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
	},
	{
		timestamps: true,
	}
);

const modelName = "Account";
module.exports = mongoose.model(modelName, instance);
