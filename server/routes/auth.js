// Dependencies
const express = require("express");
const { authorizeBearerToken } = require("../middlewares/jsonwebtoken");
const register = require("../controllers/auth/register");
const login = require("../controllers/auth/login");
const loginWithToken = require("../controllers/auth/login-with-token");

// Initialize router
const router = express.Router();

// POST at route: http://localhost:8080/api/v1/auth/register
router.post("/register", [], register);

// POST at path: http://localhost:8080/api/v1/auth/login
router.post("/login", [], login);

// GET at path: http://localhost:8080/api/v1/auth/account
router.get("/login", [authorizeBearerToken], loginWithToken);

// Export router
module.exports = router;
