const models = require("../models/habitModels");
const { locals } = require("../server");

const habitController = {};

habitController.addUser = async (req, res, next) => {
  try {
    // find by user ID / connect with auth
    const newObj = req.query;
    console.log(req.query);
    const newUserDocs = await models.HabitsData.create(newObj);
    res.locals.newUser = newUserDocs;
    return next();
  } catch (err) {
    return next({
      log: `error in habitController.getUser: ERROR = ${err}`,
      message: { err: "error occured in habitController.getUser" },
    });
  }
};

habitController.getUser = async (req, res, next) => {
  try {
    // find by user ID / connect with auth
    const _id = req.query._id;
    const user = await models.HabitsData.find({ _id });
    //res.locals.habitCards = user.habitCards;
    res.locals.habitCards = user;
    return next();
  } catch (err) {
    return next({
      log: `error in habitController.getUser: ERROR = ${err}`,
      message: { err: "error occured in habitController.getUser" },
    });
  }
};

habitController.addCard = async (req, res, next) => {
  try {
    const newObj = req.query;
    const _id = newObj._id;
    // const _id = req.query.id;
    const user = await models.HabitsData.findOne({ _id });
    user.habitCards.push(newObj);
    console.log("newObj", newObj, "user", user);
    await user.save();
  } catch (err) {
    return next({
      log: `error in habitController.addCard: ERROR = ${err}`,
      message: { err: "error occured in habitController.addCard" },
    });
  }
};

habitController.deleteCard = async (req, res, next) => {
  try {
    const newObj = req.query;
    const _id = newObj._id;
    const user = await models.HabitsData.findOne({ _id });
    let newArr = user.habitCards.filter((el) => el.cardId !== newObj.cardId);
    user.habitCards = newArr;
    console.log(newObj, user);
    await user.save();
  } catch (err) {
    return next({
      log: `error in habitController.deleteCard: ERROR = ${err}`,
      message: { err: "error occured in habitController.deleteCard" },
    });
  }
};

habitController.editRunningTotal = async (req, res, next) => {
  try {
    const newObj = req.query;
    // console.log(newObj)
    const _id = newObj._id;
    const user = await models.HabitsData.findOne({ _id });
    const cardIndex = user.habitCards.findIndex(
      (obj) => obj.cardId == newObj.cardId
    );
    // converts to number because of postman
    user.habitCards[cardIndex].runningTotal =
      Number(newObj.updated) + user.habitCards[cardIndex].runningTotal;
    console.log(user.habitCards);
    await user.save();
  } catch (err) {
    return next({
      log: `error in habitController.editCard: ERROR = ${err}`,
      message: { err: "error occured in habitController.editCard" },
    });
  }
};

module.exports = habitController;
