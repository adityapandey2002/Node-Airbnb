const Home = require("../models/home");




exports.getIndexPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/index", {
    pageTitle: "Airbnb Home",
    registeredHomes,
    current_page: 'index',
  })
  )
};


exports.getHomesPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/homes-list", {
    pageTitle: "HOMES",
    registeredHomes,
    current_page: 'homes',
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

exports.getBookingsPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/bookings", {
    pageTitle: "BOOKINGS",
    registeredHomes,
    current_page: 'bookings',
  })
  )
};


