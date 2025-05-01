// core module
const path = require("path");
// external module
const express = require("express");

// local module
const rootDir = require("../utils/pathutil");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
