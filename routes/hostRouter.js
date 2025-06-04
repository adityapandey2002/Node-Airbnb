// core module
const path = require("path");

// external module
const express = require("express");
const hostRouter = express.Router();
const homesController = require("../controllers/home");

// local module
const rootDir = require("../utils/pathutil");

hostRouter.get("/add-home", homesController.getAddHome);

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  const { housename, price, location, photoUrl } = req.body;
  registeredHomes.push({
    houseName: housename,
    price: price,
    location: location,
    photoUrl: photoUrl || 'https://placehold.co/600x400?text=No+Image'
  });
  console.log("Current registered homes:", registeredHomes);
  res.render("home-added", { pageTitle: "Home Added Successfully - Airbnb", current_page: 'home-added' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
