import express from "express";
import { delBug, findAllBugs, saveBug, saveBugs, updateCompletion } from "../services/bug.service.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { bugAccessGuard } from "../middleware/role.middleware.js";

const router = express.Router();

router
	.route('/')
	.get(authMiddleware, bugAccessGuard, findAllBugs)
	.post(authMiddleware, bugAccessGuard, saveBug)

router
	.route('/plural')
	.post(authMiddleware, bugAccessGuard, saveBugs)

router
	.route('/:bugId/completionStatus')
	.patch(authMiddleware, bugAccessGuard, updateCompletion)
	.delete(authMiddleware, bugAccessGuard, delBug)

export default router;