const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Your Home - Airbnb", current_page: 'add-home' });
};

exports.postAddHome = (req, res, next) => {
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl);
  home.save();
};

exports.getHomePage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("home", {
    pageTitle: "AIRBNB HOME",
    registeredHomes,
    current_page: 'home',
  })
  )

};

