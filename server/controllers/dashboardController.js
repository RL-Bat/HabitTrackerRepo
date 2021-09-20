//required for decoding web tokens
const jwt = require('jsonwebtoken');

const queryString = require('query-string');

//for reading .env file
require('dotenv').config();

const ENDCODED_SECRET = process.env.ENDCODED_SECRET;

const dashboardController = {};

dashboardController.verifyUser = (req, res, next) => {
  // get token from cookie object
  const { token } = req.cookies;
  //validate jwt token
  //if there is no token or token is invalid send error / login page
  if (!token) {
    res.send('there aint nothing here for ya homie');
  } else if (token) {
    //if token is valid decode jwt and send response with user id in query string for frontend
     const result = jwt.verify(token, ENDCODED_SECRET);
    //create a query string for dashboard using user id
    // const { user_id } = decoded.payload;
    //create query string to send back to frontend
    // return res.redirect(
    //   `http://localhost:3000/dashboard?${queryString.stringify(result)}`
    // );
    next();
  }
};
//to make database request

module.exports = dashboardController;
