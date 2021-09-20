const express = require('express');
const router = express.Router();

//file dependancies
//docs for google api library:
//https://github.com/googleapis/google-api-nodejs-client#oauth2-client
const { google } = require('googleapis');
const queryString = require('query-string');

//mongoose sheema
const User = require('../models/habitModels');

//required for decoding web tokens to object format & creating cookies
const jwt = require('jsonwebtoken');

//needed to create a secret for cookie on each login
const randomString = require('random-string');

//You must create a .env file to store client ID, Client secret, and Redirect Uri follow .env file example

//go to https://developers.google.com/adwords/api/docs/guides/authentication to find out how to create client id and client secret

//required for reading .env file
require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const ENDCODED_SECRET = process.env.ENDCODED_SECRET;

//from googleapi docs
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

googleController = {};

googleController.login = (req, res) => {
  //create query params for request
  //scopes needed for access to user data
  try {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/calendar',
    ];

    //generate url using Google Api library
    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
      scope: scopes,
      response_type: 'code',
    });
    return res.redirect(url);
  } catch (err) {
    return res
      .sendStatus(404)
      .message(
        'There was an error with your request to the server. Please try again'
      );
  }
};
//get user credentials
googleController.getCredentials = async (req, res, next) => {
  try {
    //deconstruct query params for code
    const { code } = req.query;
    //get tokens using access code
    const { tokens } = await oauth2Client.getToken(code);
    //set credentials property on oauth2client object to recieved credential tokens

    oauth2Client.setCredentials(tokens);
    try {
      //decode JS web token and create an object
      const decoded = jwt.decode(oauth2Client.credentials.id_token, {
        complete: true,
      });

      //pull all pieces of data from decoded JWT  - sub is unique google account id
      const { sub, email, name, picture } = decoded.payload;
      //user obj with all values needed to create query param in createUser function
      const userObj = {
        user_id: sub,
        email,
        name,
        picture,
      };

      //create correct user query string to send to frontend for database request
      const databaseQuery = await checkUser(userObj);

      //create cookie for each new user session
      //encrypted jwt to be used in cookie
      const token = jwt.sign(userObj, ENDCODED_SECRET);

      res.cookie('token', token, { httpOnly: true });
      //redirect to databaseQuery string so front end can display data

      res.locals.redirectUrl = databaseQuery;
      next();
    } catch (err) {}
  } catch (err) {
    next({
      log: `error in googleController.getCredentials: ERROR = ${err}`,
      message: { err: 'error occured in habitController.getCredentials' },
    });
  }
};

//function used to check if new user needs to be created
async function checkUser(currentUser) {
  try {
    //check if user is currently in database
    let user = await User.HabitsData.find({ userId: currentUser.user_id });
    //if user is an empty array, user was not found so create new user and return user id
    if (Array.isArray(user) && user.length === 0) {
      //create new User query string out of passed in currentUser object
      //should be changed to /dashboard enpoint
      const newUserQuery = `http://localhost:3000/dashboard?${queryString.stringify(
        currentUser
      )}`;
      return newUserQuery;
    } else {
      //if user does exist return a query string with users id
      //should be changed to /dashboard enpoint
      const oldUserQuery = `http://localhost:3000/dashboard?${queryString.stringify(
        currentUser.user_id
      )}`;
      return oldUserQuery;
    }
  } catch (err) {
    return err;
  }
}

module.exports = googleController;
