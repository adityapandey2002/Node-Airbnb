const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add Your Home - Airbnb", current_page: 'add-home', editing: false, home: null });
};

exports.getHostHomesPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => res.render("host/host-homes-list", {
    pageTitle: "Host Homes",
    registeredHomes,
    current_page: 'host-homes-list',
  })
  )
};

exports.getEditHomePage = (req, res, next) => {
  const editing = req.query.editing === 'true';
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/host/host-homes-list");
    } else {

      res.render("host/edit-home", {
        pageTitle: "Edit Home",
        current_page: 'edit-home',
        editing: editing,
        home: home,
      });
    }
  });
};

exports.postAddHome = (req, res, next) => {
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl);
  home.save();
  res.redirect('/host/host-homes-list');
}

exports.postEditHome = (req, res, next) => {
  const { id, housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-homes-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.body.homeId;
  Home.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error deleting home:", error);
      return res.status(500).redirect('/host/host-homes-list');
    }
    res.redirect("/host/host-homes-list");
  });
};