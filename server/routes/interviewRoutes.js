const express = require("express");
const router = express.Router();

router.get("/", interviewController.interview_get);
router.get("/delete", inverviewController.interview_delete);
router.get("/add", interviewController.interview_add);
