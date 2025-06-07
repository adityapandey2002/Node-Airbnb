const Home = require("../models/home");



exports.getHomePage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/home", {
    pageTitle: "AIRBNB HOME",
    registeredHomes,
    current_page: 'home',
  })
  )
};

exports.getFavoritesPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/favorites-list", {
    pageTitle: "FAVORITES",
    registeredHomes,
    current_page: 'favorites',
  })
  )
};


