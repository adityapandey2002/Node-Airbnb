exports.getAuthPage = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    current_page: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  res.redirect("/");
}
exports.postLogout = (req, res, next) => {
  // Clear the authentication cookie
  res.clearCookie('isLoggedIn');

  // Clear any other session data if needed
  req.session = null;

  // Redirect to login page
  res.redirect('/login');
}