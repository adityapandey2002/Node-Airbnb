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

exports.getSpecificHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    res.render("store/home-specific", {
      pageTitle: home ? `${home.houseName} - Airbnb` : "Home Not Found",
      home,
      current_page: 'homes'
    });
  });
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


