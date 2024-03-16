import Joi from 'joi';

const feedbackSchema = Joi.object({
  content: Joi.string().required().trim().messages({
    'string.empty': 'Feedback is required',
    'any.required': 'Feedback is required',
  }),
  isLike: Joi.boolean().required().messages({
    'boolean.base': 'like & dislike is required',
    'any.required': 'like & dislike is required',
  }),
});

export const validateFeedback = (input) => {
  const { error } = feedbackSchema.validate(input, { abortEarly: false });
  const errorObject = {};
  error?.details.map((el) => {
    errorObject[el.path[0]] = el.message;
    return undefined;
  });

  return errorObject;
};

export default validateFeedback;
