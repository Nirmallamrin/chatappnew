import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.MONGODB_URI);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB  Connected");
  } catch (error) {
    console.log("error", error);
  }
};

export default connect;
