//initialize express
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
//routers
const googleLoginRouter = require("./routes/googleLogin.js");
const databaseRouter = require("./routes/database.js");
const dashboardRouter = require("./routes/dashboard");
const interviewRouter = require("./routes/interviewRoutes");

const PORT = 3000;
// const cors = require("cors")

const MONGO_URI =
  "mongodb+srv://ChaoY:Codesmith@cluster0.zjvee.mongodb.net/tracker?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "tracker",
  })
  .then(() => console.log("Connected to the tracker database!"))
  .catch((error) => console.log(`Error connecting to database, ${error}`));

//cookie parser that will be used to persist user sessions
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//JSON parse data coming in
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//request from frontend to database
app.use("/database", databaseRouter);

//send static webpack build bundle
app.use("/build", express.static(path.join(__dirname, "../build")));
app.use("/styles", express.static(path.join(__dirname, "../client/styles")));

//for login requests
app.use("/login", googleLoginRouter);

//for request to habit dashboard
app.use("/dashboard", dashboardRouter);

//for request to interview dashboard
app.use("/interview", interviewRouter);

//for request to interview dashboard
app.use("/interview", interviewDashRouter);

//for requests to frontend home page
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/login.html"));
});

//testing purposes
app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

//global error handler setup
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "There was an error in a middleware function",
    status: 400,
    message: { err: "An error occured in a middlewear function" },
  };
  const errObj = Object.assign(defaultErr, { err: err });
  return res.status(errObj.status).send(errObj.message);
});

app.listen(PORT, () => {
  console.log(`The server is on on port ${PORT}. It's listening...`);
});

module.exports = app;
