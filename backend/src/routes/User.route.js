const express = require('express');
const { registerUserValidator } = require('../validators/User.validator');
const { registerUser } = require('../controllers/User.controller');
const upload = require('../middlewares/upload');

const userRouter = express.Router();

userRouter.post(
  '/register',
  upload.single('profilePicture'),
  registerUserValidator,
  registerUser
);

module.exports = userRouter;
