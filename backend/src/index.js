import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js";
import connect from "./config/db.js";

connect()
dotenv.config()
const app = express()


const PORT = process.env.PORT

app.use("/auth", authRoute)

app.get("/", (req, res) => {
    res.send("Chat New")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})