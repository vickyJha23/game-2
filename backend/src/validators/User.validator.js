const Joi = require('joi');

const registerUserValidator = (req, res, next) => {
  console.log('body', req.body);
  const registerSchema = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .max(12)
      .required()
      .pattern(
        new RegExp(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
      ),
    role: Joi.string().required().valid('admin'),
  });

  const { error, value } = registerSchema.validate(req.body);
  console.log(error);
  if (error) {
    next(error);
  }
  req.body = value;
  return next();
};

module.exports = { registerUserValidator };
