import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB();

const APP = express();
APP.use(cors());

//Middlewares
APP.use(express.json());
APP.use(clerkMiddleware());

// API TO LISTEN CLERK WEBHOOKS
APP.use("/api/clerk", clerkWebhooks);

APP.get("/", (req, res) => res.send("API IS WORKING"));

const PORT = process.env.PORT || 8000;

APP.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
