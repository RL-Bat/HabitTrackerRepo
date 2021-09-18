const express = require("express");
const router = express.Router();
const googleController = require("../controllers/googleController.js");

router.get("/", googleController.login);

router.get("/callback", googleController.createTokens);

module.exports = router;
