// core module
const path = require("path");

// external module
const express = require("express");
const storeController = require("../controllers/storeController");

// local module
const rootDir = require("../utils/pathutil");

const storeRouter = express.Router();

storeRouter.get("/", storeController.getHomePage);
storeRouter.get("/host/favorites", storeController.getFavoritesPage);


module.exports = storeRouter;
