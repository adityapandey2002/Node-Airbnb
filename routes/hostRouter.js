// core module
const path = require("path");

// external module
const express = require("express");
const hostRouter = express.Router();
const hostController = require("../controllers/hostController");

// local module
const rootDir = require("../utils/pathutil");

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.get("/host-homes-list", hostController.getHostHomesPage);


hostRouter.post("/add-home", hostController.postAddHome);

exports.hostRouter = hostRouter;

