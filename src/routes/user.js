import express from 'express';
import { createUser, getUserById, deleteUserById, updateUserById } from '../controller/user';
//import userSchem from '../validations/user.js';


const userRouter = express.Router();
//добавить пользователя
userRouter.post('/', createUser);
//userRouter.post('/', userSchem, createUser);

//получить пользователя
userRouter.get('/:userId', getUserById);
//userRouter.get('/:userId', userSchem, getUserById);

//обновить пользователя
userRouter.patch('/:userId', updateUserById);
//userRouter.patch('/:userId', userSchem, updateUserById);

//удалить пользователя
userRouter.delete('/:userId', deleteUserById);
//userRouter.delete('/:userId', userSchem, deleteUserById);

export default userRouter;