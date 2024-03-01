import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .trim()
    .messages({ 'string.empty': 'email is required' }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]/)
    .required()
    .messages({ 'string.empty': 'password is required' }),
});

export const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  const errorObject = {};
  const temp = error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return null;
  });
  console.log('error object is here!!!!');
  console.log(temp);

  return errorObject;
};

export const temp = () => {};
