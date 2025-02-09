import express from 'express';
import { createTask, editTask, deleteTask, getTasks,filterTasks } from '../controllers/task.js';
import {auth} from '../auth/middleware.js'

const router = express.Router();

router.post('/',auth, createTask);
router.put('/:taskId',auth, editTask);
router.delete('/:taskId',auth, deleteTask);
router.get('/',auth, getTasks);
router.get("/filter",auth,filterTasks)

export default router;
