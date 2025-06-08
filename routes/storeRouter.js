// core module
const path = require("path");

// external module
const express = require("express");
const storeController = require("../controllers/storeController");

// local module
const rootDir = require("../utils/pathutil");

const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndexPage);
storeRouter.get("/homes", storeController.getHomesPage);
storeRouter.get("/homes/:homeId", storeController.getSpecificHome);
storeRouter.get("/favourites", storeController.getFavouritesPage);
storeRouter.post("/favourites", storeController.postAddToFavouritesPage);
storeRouter.get("/bookings", storeController.getBookingsPage);

module.exports = storeRouter;
