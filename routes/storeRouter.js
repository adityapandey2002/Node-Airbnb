// core module
const path = require("path");
// external module
const express = require("express");
const homesController = require("../controllers/home");

// local module
const rootDir = require("../utils/pathutil");

const storeRouter = express.Router();

storeRouter.get("/", homesController.getHomePage);

module.exports = storeRouter;
