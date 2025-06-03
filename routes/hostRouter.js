// core module
const path = require("path");

// external module
const express = require("express");
const hostRouter = express.Router();

// local module
const rootDir = require("../utils/pathutil");


hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Received form submission:");
  console.log("Body:", req.body);
  console.log("House name:", req.body.housename);

  // Store the home data
  registeredHomes.push(req.body);
  console.log("Current registered homes:", registeredHomes);

  res.sendFile(path.join(rootDir, "views", "home-added.html"));
});

module.exports = hostRouter;
