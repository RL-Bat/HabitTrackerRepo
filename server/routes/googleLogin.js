const express = require("express");
const router = express.Router();

//file dependencies
const googleController = require("../controllers/googleController.js");

router.get("/", googleController.login);

//localhost:3000/login/callback
//route to authenticate user credentials and sign user in
router.get("/callback", googleController.getCredentials, (req, res) => {
  if (res.locals.redirectUrl) {
    res.redirect(res.locals.redirectUrl);
  } else {
    res
      .sendStatus(404)
      .statusMessage("There was an error with the request. Please try again.");
  }
});

module.exports = router;
