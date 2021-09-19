//initialize express
const express = require("express");
const path = require("path");
const app = express();

//routers
const googleLoginRouter = require("./routes/googleLogin.js");
const databaseRouter = require("./routes/database.js");

const PORT = 3000;
// const cors = require("cors")

//cookie parser that will be used to persist user sessionsc
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//JSON parse data coming in
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/database", databaseRouter);

app.use("/build", express.static(path.join(__dirname, "../build")));

//for login requests
app.use("/login", googleLoginRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`The server is on on port ${PORT}. It's listening...`);
});

module.exports = app;
