// Dependencies
const express = require("express");
const user = require("../controllers/profile/user");

// Initialize router
const router = express.Router();

// GET at route: http://localhost:8080/api/v1/profile/user
router.get("/user/:username", [], user);

// Export router
module.exports = router;
