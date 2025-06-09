const Favourites = require("../models/favourites");
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


exports.getFavouritesPage = (req, res, next) => {
  Favourites.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouritesWithDetails = favourites.map(homeId => registeredHomes.find(home => home.id === homeId));

      res.render("store/favourites-list", {
        favouritesWithDetails: favouritesWithDetails,
        pageTitle: "MY FAVOURITES",
        current_page: 'favourites',
      })
    })
  })
};

exports.postAddToFavouritesPage = (req, res, next) => {
  Favourites.addToFavourites(req.body.homeId, error => {
    if (error) {
      console.log("Error while marking favourite");
      return res.status(500).redirect('/favourites');
    }
    res.redirect("/favourites");
  });
};


exports.postRemoveFromFavouritesPage = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.deleteById(homeId, error => {
    if (error) {
      console.log("Error while removing from favourites", error)
    }
    res.redirect("/favorites");
  })
}
exports.getBookingsPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/bookings", {
    pageTitle: "BOOKINGS",
    registeredHomes,
    current_page: 'bookings',
  })
  )
};


