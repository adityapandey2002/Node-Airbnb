exports.pageNotFound = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found - Airbnb', current_page: '404', isLoggedIn: req.session.isLoggedIn });
};