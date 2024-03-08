import express from "express";
import { getUserProfileAndRepos } from "../controllers/userController.js";

const router=express.Router();

router.get("/profile/:username",getUserProfileAndRepos)
router.get("/",(req,res)=>{
    res.send("Hello")
})

export default router