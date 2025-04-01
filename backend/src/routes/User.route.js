const express = require("express");
const { registerUserValidator } = require("../validators/User.validator");
const { registerUser } = require("../controllers/User.controller");

const userRouter = express.Router();



userRouter.post("/register", registerUserValidator, registerUser); 







module.exports = userRouter;
