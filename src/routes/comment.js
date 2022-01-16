import express from 'express';
const { CommentController } = require('../controller/comment');

const commentRouter = express.Router();

// получить все задачи
commentRouter.get('/comments', CommentController.getAllComments);
// получить задачу по id
commentRouter.get('/comments/:commentId', CommentController.getComment);
// создать задачу
commentRouter.post('/comments', CommentController.createComment);
// обновить задачу
commentRouter.patch('/comments/:commentId', CommentController.updateComment);
// удалить задачу
commentRouter.delete('/comments/:commentId', CommentController.deleteComment);

export default commentRouter;