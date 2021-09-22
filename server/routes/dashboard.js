const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');
const path = require('path');

//for any request to the user dashboard
router.get('/', dashboardController.verifyUser, (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, '../../client/index.html'));
});




module.exports = router;
