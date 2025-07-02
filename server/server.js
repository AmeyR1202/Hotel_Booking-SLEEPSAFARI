import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoute.js";
import bookingRouter from "./routes/bookingRoutes.js";

connectDB();
connectCloudinary();

const APP = express();
APP.use(cors());

//Middlewares
APP.use(express.json());
APP.use(clerkMiddleware());

// API TO LISTEN CLERK WEBHOOKSß
APP.use("/api/clerk", clerkWebhooks);

APP.get("/", (req, res) => res.send("API IS WORKING"));
APP.use("/api/user", userRouter);
APP.use("/api/hotels", hotelRouter);
APP.use("/api/rooms", roomRouter);
APP.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 8000;

APP.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
