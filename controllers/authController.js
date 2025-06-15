exports.getAuthPage = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    current_page: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.isLoggedIn = true;
  res.redirect("/");
}