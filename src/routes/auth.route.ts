import { Router } from "express";
import { signUp } from "../controllers/auth/signUP.controller";
import { signIn } from "../controllers/auth/signin.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.post("/signIn", signIn);
export default userRoute;
