import express from "express";
import { userSignupSchema, userSigninSchema } from "../schemas/usersSchemas.js";
import { subscriptionSchema } from "../schemas/contactsSchemas.js";
import authControllers from "../controllers/authControlers.js";
import validateBody from "../decorators/validateBody.js";
import authenticate from "../middlewares/authenticate.js";

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

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.signout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  authControllers.patchSubscription
);

export default authRouter;
