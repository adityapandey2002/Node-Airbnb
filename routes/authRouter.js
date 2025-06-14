
// external module
const express = require("express");
const authController = require("../controllers/authController");


const authRouter = express.Router();

storeRouter.get("/login", authController.getAuthPage);

exports.authRouter = authRouter;