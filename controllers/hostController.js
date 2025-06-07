const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add Your Home - Airbnb", current_page: 'add-home' });
};

exports.postAddHome = (req, res, next) => {
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl);
  home.save();
  res.render('host/home-added', { pageTitle: 'Home Added Successfully - Airbnb', current_page: 'home-added' });
};