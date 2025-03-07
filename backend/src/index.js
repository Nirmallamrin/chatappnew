import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";

import connect from "./config/db.js";
import cookieParser from "cookie-parser";
connect()
dotenv.config()
const app = express()


const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser())

app.use("/auth", authRoute)
app.use("/message", messageRoute);

app.get("/", (req, res) => {
    res.send("Chat New")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})