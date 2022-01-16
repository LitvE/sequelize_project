import express from 'express';
import userRouter from './user';
import taskRouter from './task';
//import commentRouter from './comment';

const router = express.Router();
router.use('/user', userRouter);
router.use('/task', taskRouter);
//router.use('/comment', commentRouter);

export default router;