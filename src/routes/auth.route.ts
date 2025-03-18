import { Router } from "express";
import { signUP } from "../controllers/auth/signUP.controller";

const userRoute = Router();

userRoute.post("/signup", signUP);

export default userRoute;
