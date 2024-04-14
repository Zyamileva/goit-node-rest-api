import Joi from "joi";
import { emailRegepxp } from "../constants/user-constants.js";
import { subscriptionList } from "../constants/user-constants.js";

export const userSignupSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegepxp).required(),
  subscription: Joi.string()
    .valid(...subscriptionList)
    .default("starter"),
  token: Joi.string().default(null),
});

export const userSigninSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegepxp).required(),
  token: Joi.string().default(null),
});

export const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegepxp).required(),
});

const joiVerifySchema = Joi.object({
  email: Joi.string().required(),
});
