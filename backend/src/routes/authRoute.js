import express from "express";
import { signup, signin, logout } from "../controllers/authController.js";
const authRoute = express.Router()

authRoute.post("/signup", signup);
authRoute.post("/signin", signin);
authRoute.post("/logout", signup);

export default authRoute