const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController.js");

//for any request to the user dashboard
router.get("/", dashboardController.verifyUser);
module.exports = router;
