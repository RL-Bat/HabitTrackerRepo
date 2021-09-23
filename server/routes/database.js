const express = require("express");

const habitController = require("../controllers/habitController.js");

const router = express.Router();

router.get("/", habitController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post(
  "/checkUser",
  habitController.getUser,
  habitController.addUser,
  (req, res) => res.status(200).json(res.locals.newUser)
);

router.post("/addCard", habitController.addCard, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals.habitCards);
});

router.delete("/deleteCard", habitController.deleteCard, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals.habitCards);
});

router.patch(
  "/editRunningTotal",
  habitController.editRunningTotal,
  (req, res) => {
    console.log(res.locals);
    res.status(200).json(res.locals.habitCards);
  }
);

module.exports = router;
