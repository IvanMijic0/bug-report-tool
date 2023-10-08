import express from 'express';
import {login, register, validate} from "../services/auth.service.js";

const router = express.Router();

router
    .post('/register', register)
    .post('/login', login)
    .post('/validate', validate);

export default router;