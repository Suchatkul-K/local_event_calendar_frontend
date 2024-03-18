import Joi from 'joi';

const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().required().messages({
    'any.required': 'Old Password is required',
    'string.empty': 'Old Password is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.required': 'Confirm password is required',
    'string.empty': 'Confirm password is required',
    'any.only': 'Confirm password should be matched',
  }),
});

const validateChangePassword = (input) => {
  const { error } = changePasswordSchema.validate(input, { abortEarly: false });
  // console.dir(error);

  const errorObject = {};
  error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return undefined;
  });

  return errorObject;
};

export default validateChangePassword;
