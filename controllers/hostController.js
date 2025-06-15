const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add Your Home - Airbnb", current_page: 'add-home', editing: false, home: null, isLoggedIn: req.session.isLoggedIn });
};

exports.getHostHomesPage = (req, res, next) => {
  Home.find()
    .then(registeredHomes => {
      res.render("host/host-homes-list", {
        pageTitle: "Host Homes",
        registeredHomes,
        current_page: 'host-homes-list',
        isLoggedIn: req.session.isLoggedIn
      });
    })
    .catch(err => next(err));
};

exports.getEditHomePage = (req, res, next) => {
  const editing = req.query.editing === 'true';
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then(home => {
      if (!home) {
        return res.redirect("/host/host-homes-list");
      }
      res.render("host/edit-home", {
        pageTitle: "Edit Home",
        current_page: 'edit-home',
        editing: editing,
        home: home,
        isLoggedIn: req.session.isLoggedIn
      });
    })
    .catch(err => next(err));
};

exports.postAddHome = (req, res, next) => {
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home({
    housename,
    price,
    location,
    rating,
    photoUrl
  });
  home.save()
    .then(() => {
      res.redirect('/host/host-homes-list');
    })
    .catch(err => next(err));
};

exports.postEditHome = (req, res, next) => {
  const { id, housename, price, location, rating, photoUrl } = req.body;
  Home.findById(id)
    .then(home => {
      home.housename = housename;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.photoUrl = photoUrl;
      return home.save();
    })
    .then(() => {
      res.redirect("/host/host-homes-list");
    })
    .catch(err => next(err));
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.body.homeId;
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-homes-list");
    })
    .catch(err => {
      console.log("Error deleting home:", err);
      res.status(500).redirect('/host/host-homes-list');
    });
};