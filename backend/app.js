const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./src/routes/User.route');

// initialize express
const app = express();
app.use(cors());
app.use(
  express.json({
    limit: '1MB',
  })
);
app.use(
  express.urlencoded({
    limit: '1MB',
    extended: true,
  })
);
app.use(cookieParser());

// here the route setup will work
app.use('/api/v1/user', userRouter);

// global error handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Server error';

  res.status(status).json({
    error: {
      statusCode: status,
      status: false,
      message: message,
      ip: req.ip,
      url: req.originalUrl,
      method: req.method,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    },
  });
});

module.exports = app;
