const { validationResult, check } = require("express-validator");
const User = require("../models/user");
const bcrypt = require('bcryptjs');

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
    errors: [],
    oldInput: { firstName: "", lastName: "", email: "", password: "", usertype: "" }
  });
};

exports.postSignUp = [
  check('firstName')
    .notEmpty()
    .withMessage('First Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters long')
    .matches(/^[a-zA-Z]+$/)
    .withMessage('First name can only contain letters'),

  check('lastName')
    .notEmpty()
    .withMessage('Last Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Last name must be at least 2 characters long')
    .matches(/^[a-zA-Z]+$/)
    .withMessage('Last name can only contain letters'),

  check('email')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),

  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password should contain at least one Uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password should contain at least one Lowercase letter')
    .matches(/[0-9]/)
    .withMessage('Password should contain at least one number')
    .matches(/[@$!%*?&]/)
    .withMessage('Password must contain at least one special character')
    .trim(),

  check('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

  check('userType')
    .notEmpty()
    .withMessage('User type is required')
    .isIn(['GUEST', 'HOST'])
    .withMessage('Invalid user type'),

  check('terms')
    .notEmpty()
    .withMessage('You must accept the terms and conditions')
    .custom((value) => {
      if (value !== 'on') {
        throw new Error('You must accept the terms and conditions');
      }
      return true;
    }),



  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render('auth/signup', {
        pageTitle: 'SignUp',
        current_page: 'SignUp',
        isLoggedIn: false,
        errors: errors.array().map(err => err.msg),
        oldInput: { firstName, lastName, email, userType },
      });
    }

    bcrypt.hash(password, 12).then(hashedpassword => {
      const user = new User({ firstName, lastName, email, password: hashedpassword, userType });
      return user.save();
    })
      .then(() => {
        res.redirect('/login');
      })
      .catch(err => {
        return res.status(422).render('auth/signup', {
          pageTitle: 'SignUp',
          current_page: 'SignUp',
          isLoggedIn: false,
          errors: ["User already exists", err.message],
          oldInput: { firstName, lastName, email, password: '', userType },
        });
      })
  }
];

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  // res.clearCookie('isLoggedIn');
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
