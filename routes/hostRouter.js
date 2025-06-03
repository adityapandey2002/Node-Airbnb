// core module
const path = require("path");

// external module
const express = require("express");
const hostRouter = express.Router();

// local module
const rootDir = require("../utils/pathutil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Your Home - Airbnb" });
});

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
  res.render("home-added", { pageTitle: "Home Added Successfully - Airbnb" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
