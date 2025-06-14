

const Favourites = require("../models/favourites");
const Home = require("../models/home");

exports.getIndexPage = (req, res, next) => {
  Home.find()
    .then(registeredHomes => {
      res.render("store/index", {
        pageTitle: "Airbnb Home",
        registeredHomes,
        current_page: 'index',
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
        current_page: 'homes'
      });
    })
    .catch(err => next(err));
};

exports.getFavouritesPage = (req, res, next) => {
  Favourites.find()
    .populate('houseId')
    .then((favourites) => {
      const favouriteHomes = favourites.map((fav) => fav.houseId);

      res.render("store/favourites-list", {
        favouritesWithDetails: favouriteHomes,
        pageTitle: "MY FAVOURITES",
        current_page: 'favourites',
      });
    });
};

exports.postAddToFavouritesPage = (req, res, next) => {
  const homeId = req.body.homeId;
  if (!homeId) {
    console.log("Error: No homeId provided");
    return res.status(400).redirect("/favourites");
  }

  Favourites.findOne({ houseId: homeId })
    .then(existingFav => {
      if (existingFav) {
        return Promise.resolve(); // Already in favorites
      }
      const fav = new Favourites({ houseId: homeId });
      return fav.save();
    })
    .then(() => {
      res.redirect("/favourites");
    })
    .catch(err => {
      console.log("Error while marking favourites:", err);
      res.status(500).redirect("/favourites");
    });
};

exports.postRemoveFromFavouritesPage = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.findOneAndDelete({ houseId: homeId })
    .then(() => {
      res.redirect("/favourites");
    })
    .catch(err => {
      console.log("Error while removing from favourites:", err);
      res.status(500).redirect("/favourites");
    });
};

exports.getBookingsPage = (req, res, next) => {
  Home.find()
    .then(registeredHomes => {
      res.render("store/bookings", {
        pageTitle: "BOOKINGS",
        registeredHomes,
        current_page: 'bookings',
      });
    })
    .catch(err => next(err));
};
