import express from 'express';
import { createTask, editTask, deleteTask, getTasks } from '../controllers/task.js';
import {auth} from '../auth/middleware.js'

const router = express.Router();

// TODO: Protect routes that require user authentication
router.post('/',auth, createTask);
router.put('/:taskId',auth, editTask);
router.delete('/:taskId',auth, deleteTask);
router.get('/',auth, getTasks);

export default router;
