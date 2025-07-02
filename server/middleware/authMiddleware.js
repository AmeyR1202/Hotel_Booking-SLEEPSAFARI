import { request } from "express";
import User from "../models/User.js";
// Middleware to check whether a user is authenticated or not

export const protect = async (req, res, next) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.json({ success: false, message: "not authenticated" });
  } else {
    const user = await user.findById(userId);
    req.user = user;
    next();
  }
};
