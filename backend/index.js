import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MongoDB_URL;

const app = express();

//********************************************************** Enable CORS(let frontend communicate with backend)
app.use(cors({
  origin: "http://localhost:5173", // Allow your frontend(frontend URL)
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // only if you're using cookies or auth headers
}));

//*********************************************************MIDDLEWARE(parse any data that we are sending through body(by using req.body))
app.use(express.json())



// ********************************************************CONNECT TO MONGODB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log(" MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1); // stop the server if DB connection fails
  }
};
connectDB();
// **********************************

// ********************************************************DEFINING ROUTE(get API defined in route is being called here)

app.use("/book", bookRoute);       // FOR BOOKS
app.use("/user",userRoute)         // FOR USER SIGNUP AND LOGIN

// **********************************

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
