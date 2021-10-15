import joi from "joi";

export const ValidateSignUp = (userData) => {
  const Schema = joi.object({
    fullname: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().min(8),
    address: joi.array().items(
      joi.object({
        detail: joi.string(),
        for: joi.string(),
      })
    ),
    phoneNumber: joi.number(),
  });

  return Schema.validate(userData);
};
export const ValidateSignIn = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });

  return Schema.validate(userData);
};
