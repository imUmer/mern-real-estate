import express from "express";
import { google, signin, signup, signOut } from "../controllers/auth.controller.js";

const router = new express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signOut);
router.post("/google", google);


export default router; 
