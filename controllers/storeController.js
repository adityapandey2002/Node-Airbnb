const Home = require("../models/home");
const User = require("../models/user");

exports.getIndexPage = (req, res, next) => {
  console.log("session value: ", req.session);
  Home.find()
    .then(registeredHomes => {
      res.render("store/index", {
        pageTitle: "Airbnb Home",
        registeredHomes,
        current_page: 'index',
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user
      });
    })
    .catch(err => next(err));

};

exports.getHomesPage = (req, res, next) => {
  Home.find()
    .then(registeredHomes => {
      res.render("store/homes-list", {
        pageTitle: "HOMES",
        registeredHomes,
        current_page: 'homes',
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user
      });
    })
    .catch(err => next(err));
};

exports.getSpecificHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then(home => {
      res.render("store/home-specific", {
        pageTitle: home ? `${home.houseName} - Airbnb` : "Home Not Found",
        home,
        current_page: 'homes',
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user
      });
    })
    .catch(err => next(err));
};


exports.getBookingsPage = (req, res, next) => {
  Home.find()
    .then(registeredHomes => {
      res.render("store/bookings", {
        pageTitle: "BOOKINGS",
        registeredHomes,
        current_page: 'bookings',
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user
      });
    })
    .catch(err => next(err));
};
