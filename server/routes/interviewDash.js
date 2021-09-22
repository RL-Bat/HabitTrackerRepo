const { response } = require('express');
const express = require('express');
const habitController = require('../controllers/habitController.js');

//const ...Controller = require('');

const router = express.Router();

/* 
router.get('/', habitController.getUser, ...getInterview, (req, res) => {
  res.status(200).json(res.locals.user);
})

router.post('/addInterview', ...addInterview, (req, res) => {
  res.status(200).json(res.locals.interview)
})

router.post('/editInterview/:interview_id', ...editInterview. (req, res) => {
  res.status(200).json(res.locals.interview)
})








*/

module.exports = router;