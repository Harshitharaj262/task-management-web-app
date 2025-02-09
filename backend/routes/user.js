import express from 'express';
import { signupUser, loginUser, getAllUsers } from '../controllers/user.js';
import {auth} from '../auth/middleware.js'
const router = express.Router();

router.post('/signup', signupUser);

router.post('/login', loginUser);

router.get('/',auth, getAllUsers)


export default router;
