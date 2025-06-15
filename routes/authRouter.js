
// external module
const express = require("express");
const authController = require("../controllers/authController");


const authRouter = express.Router();

authRouter.get("/login", authController.getAuthPage);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);
authRouter.get("/signup", authController.getSignUpPage);
authRouter.post("/signup", authController.postSignUp);

exports.authRouter = authRouter;