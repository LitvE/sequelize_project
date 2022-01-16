import express from 'express';
import { createTask, deleteTaskById, getTaskById, getTasks } from '../controller/task';

const taskRouter = express.Router();
//route for creating Task
taskRouter.post('/', createTask);
//route for deleting Task
taskRouter.delete('/:taskId', deleteTaskById);
//route for getting Task
taskRouter.get('/:taskId', getTaskById);
//route for getting all Tasks
taskRouter.get('/', getTasks);

export default taskRouter;