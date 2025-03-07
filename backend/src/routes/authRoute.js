import express from "express";
import {
  signup,
  signin,
  logout,
  updateProfile,
  checkAuth
} from "../controllers/authController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const authRoute = express.Router()

authRoute.post("/signup", signup);
authRoute.post("/signin", signin);
authRoute.post("/logout", logout);

authRoute.put("/update-profile", protectRoute, updateProfile)

authRoute.get("/check", protectRoute, checkAuth)

export default authRoute