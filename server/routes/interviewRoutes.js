const express = require("express");
// const { interview_get } = require("../controllers/interviewController");
const interviewController = require("../controllers/interviewController");
const router = express.Router();

router.get("/", interviewController.interview_get, (req, res) =>
  res.status(200).send("user get got")
);

router.post("/add", interviewController.interview_add, (req, res) =>
  res.status(200).send("user added")
);

router.delete("/delete", interviewController.interview_delete, (req, res) =>
  res.status(200).send("user deleted")
);

router.put("/update", interviewController.interview_update, (req, res) => {
  res.status(200).send("user updated");
});

module.exports = router;
