import express from "express";
import { delBug, findAllBugs, getBugsByUserId, saveBug, updateCompletion } from "../services/bug.service.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { devGuard } from "../middleware/role.middleware.js";

const router = express.Router();

router
	.route('/')
	.get(authMiddleware, devGuard, findAllBugs)
	.post(authMiddleware, devGuard, saveBug)

router
	.route('/:bugId/completionStatus')
	.patch(authMiddleware, devGuard, updateCompletion)
	.delete(authMiddleware, devGuard, delBug)

router
	.route('/:userId')
	.get(authMiddleware, getBugsByUserId)

export default router;