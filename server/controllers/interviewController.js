const express = require("express");
const Interview = require("../models/interviewModels");

const trackerController = {};

trackerController.interview_add = async (req, res, next) => {
  try {
    const newObj = req.query;
    // console.log(req.query, "req.q worked");
    const newUserDocs = await Interview.create(newObj);
    // console.log(newUserDocs);
    res.locals.newUser = newUserDocs;
    // console.log("okokokok");
    return next();
  } catch (err) {
    return next({
      log: `error in intervie.add: ERROR = ${err}`,
      message: { err: "error in interview_add" },
    });
  }
};

trackerController.interview_get = async (req, res, next) => {
  try {
    // console.log("blatblatblat");
    const { user_id } = req.query;
    // console.log(user_id);
    const user = await Interview.find({ user_id });
    // console.log(user);
    res.locals.user = user;
    return next();
  } catch (err) {
    return next({
      log: `error in interview.get: ERROR = ${err}`,
      message: { err: "error occured in interview_get" },
    });
  }
};

trackerController.interview_delete = async (req, res, next) => {
  try {
    const newObj = req.query;
    const objId = newObj._id;
    const user = await Interview.findOne({ objId });
    await Interview.findByIdAndDelete(objId);
    return next();
  } catch (err) {
    return next({
      log: `error in interview.delete: ERROR = ${err}`,
      message: { err: "error occured in interview_delete" },
    });
  }
};

trackerController.interview_update = async (req, res, next) => {
  // try {
  //   console.log("test");
  //   const newObj = req.query;
  //   const user = await Interview.findOne({ newObj });
  //   console.log(user);
  // } catch (err) {
  //   return next({
  //     log: `error in interview.update: ERROR = ${err}`,
  //     message: { err: "error occured in interview_update" },
  //   });
  // }
};

module.exports = trackerController;
