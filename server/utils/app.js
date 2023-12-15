// Dependencies
const express = require("express");
const cors = require("cors");
const { ORIGIN } = require("../constants");

// Initalize the Express app
const app = express();

// Middlewares
app.use(cors({ origin: ORIGIN }));
app.use(express.json({ extended: true })); // Body Parser
app.use(express.urlencoded({ extended: false })); // Url Parser

// Handle errors
app.use((error, req, res, next) => {
	console.error(error);
	res.status(500).send();
	next();
});

// Export
module.exports = app;
