exports.getAuthPage = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    current_page: "login",
  });
};

exports.postLogin = (req, res, next) => {
  res.redirect("/");
}