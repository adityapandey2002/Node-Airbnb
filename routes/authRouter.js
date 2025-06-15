
// external module
const express = require("express");
const authController = require("../controllers/authController");


const authRouter = express.Router();

authRouter.get("/login", authController.getAuthPage);
authRouter.post("/login", authController.postLogin);

exports.authRouter = authRouter;