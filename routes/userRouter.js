// core module
const path = require("path");
// external module
const express = require("express");

// local module
const rootDir = require("../utils/pathutil");
const { registeredHomes } = require("./hostRouter");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.render("home", {
    pageTitle: "AIRBNB HOME",
    registeredHomes
  });
  console.log("Registered Homes are: ", registeredHomes);
});

module.exports = userRouter;
