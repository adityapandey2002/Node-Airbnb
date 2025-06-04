exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Your Home - Airbnb", current_page: 'add-home' });
};

