import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

connectDB();

const APP = express();
APP.use(cors());

APP.get("/", (req, res) => res.send("API IS WORKING"));

const PORT = process.env.PORT || 8000;

APP.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
