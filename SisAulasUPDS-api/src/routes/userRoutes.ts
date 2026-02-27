import { Router } from "express";
import {getUserById} from "../controllers/userController";

const router = Router();

router.get("/user", getUserById);

export default router;