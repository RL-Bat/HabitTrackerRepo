const express = require("express");
const router = express.Router();
const { Storage } = require("@google-cloud/storage");
const { google } = require("googleapis");
const gaxios = require("gaxios");
const axios = require("axios");
const people = google.people("v1");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

//oauth client parameters
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

googleController = {};

googleController.login = (req, res) => {
  //create query params for request
  //scopes needed for access to user data
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/calendar",
  ];

  //generate url using Google Api library
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",
    scope: scopes,
    response_type: "code",
  });

  return res.redirect(url);
};

googleController.createTokens = async (req, res, next) => {
  try {
    //deconstruct query params for code
    const { code } = req.query;
    //get tokens using access code
    const { tokens } = await oauth2Client.getToken(code);
    console.log(tokens);
    //set credentials property on oauth2client object to recieved credential tokens
    oauth2Client.setCredentials(tokens);
    console.log(oauth2Client);

    try {
      const decoded = jwt.decode(oauth2Client.credentials.id_token, {
        complete: true,
      });
      console.log(decoded);
    } catch (err) {}
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = googleController;
