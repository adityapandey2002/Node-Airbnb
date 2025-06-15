exports.getAuthPage = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    current_page: "login",
    isLoggedIn: false,
  });
};

exports.getSignUpPage = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    current_page: "SignUp",
    isLoggedIn: false,
  });
};

exports.postSignUp = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
}



exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  res.redirect("/");
}
exports.postLogout = (req, res, next) => {

  // res.clearCookie('isLoggedIn');
  req.session.destroy(() => {
    res.redirect('/login');
  })
}