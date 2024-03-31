import express from "express";
import { userSignupSchema, userSigninSchema } from "../schemas/usersSchemas.js";
import authControllers from "../controllers/authControlers.js";
import validateBody from "../decorators/validateBody.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupSchema),
  authControllers.signup
);

authRouter.post(
  "/login",
  validateBody(userSigninSchema),
  authControllers.signin
);

export default authRouter;
