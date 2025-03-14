import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";

import connect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

import { app, server } from "./config/socket.js";

connect()

dotenv.config()


const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
      origin: "http://localhost:5173",
      credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/messages", messageRoute);

app.get("/", (req, res) => {
    res.send("Chat New")
})

server.listen(PORT, () => {
    console.log(`server is running on port ${ PORT }`);
})