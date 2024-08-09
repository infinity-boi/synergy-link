import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getCompatibleUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getCompatibleUsersForSidebar);

export default router;