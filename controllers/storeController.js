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

exports.getFavouritesPage = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate('favourites');
  res.render("store/favourites-list", {
    favouritesWithDetails: user.favourites,
    pageTitle: "MY FAVOURITES",
    current_page: 'favourites',
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user
  });
};


exports.postAddToFavouritesPage = async (req, res, next) => {
  const homeId = req.body.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user.favourites.includes(homeId)) {
    user.favourites.push(homeId);
    await user.save();
  }
  if (!homeId) {
    console.log("Error: No homeId provided");
    return res.status(400).redirect("/favourites");
  }
  res.redirect("/favourites");
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
