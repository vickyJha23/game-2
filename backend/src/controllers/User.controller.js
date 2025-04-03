const User = require('../models/User.model');
const {
  handleHashPassword,
  comparePasswordHandler,
} = require('../utilities/User.util');

const registerUser = async (req, res, next) => {
  const { userName, email, password, profilePicture, role } = req.body;
  console.log(userName, email);
  try {
    const isUserAlreadyExist = await User.findOne({ email });
    if (isUserAlreadyExist) {
      return res.status(409).json({
        message: 'User already exist',
        status: false,
        statusCode: 409,
      });
    }
    const hashedPassword = handleHashPassword(password);
    const user = new User({
      userName,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({
      message: 'User registered successfully',
      status: 201,
    });
  } catch (error) {
    console.error('Error in user registration', error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status().json({
        message: "User doesn't exit",
        status: false,
        statusCode: 404,
      });
    }

    const isPasswordValid = comparePasswordHandler(password, user.password);
    if (!isPasswordValid) {
      return res.status.json({
        message: 'Password is invalid',
        status: false,
        statusCode: 401,
      });
    }
  } catch (error) {
    console.log('Error in login', error);
    next(error);
  }
};

module.exports = { registerUser };
