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
  Home.fetchAll((registeredHomes) => res.render("store/favourites-list", {
    pageTitle: "FAVOuRITES",
    registeredHomes,
    current_page: 'favourites',
  })
  )
};

exports.postAddToFavouritesPage = (req, res, next) => {
  console.log("Came to add Favorite with id ", req.body);

  res.render('/favourites', { pageTitle: 'Added to Favourites', current_page: 'Your Favourites' });
};

exports.getBookingsPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("store/bookings", {
    pageTitle: "BOOKINGS",
    registeredHomes,
    current_page: 'bookings',
  })
  )
};


