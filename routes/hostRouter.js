// core module
const path = require("path");

// external module
const express = require("express");
const hostRouter = express.Router();
const homesController = require("../controllers/home");

// local module
const rootDir = require("../utils/pathutil");

hostRouter.get("/add-home", homesController.getAddHome);



hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;

