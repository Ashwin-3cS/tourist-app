import express from "express";
import { commentPost } from "../controller/commentAdd.js";


const router = express.Router()


router.post("/commentPost",commentPost);


export default router;