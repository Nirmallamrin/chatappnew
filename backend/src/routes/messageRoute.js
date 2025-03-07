import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/messageController.js";

const messageRoute = express.Router();

messageRoute.get("/getuser", protectRoute, getUsersForSidebar)
messageRoute.get("/:id", protectRoute, getMessages)
messageRoute.post("/send/:id", protectRoute, sendMessage)

export default messageRoute;