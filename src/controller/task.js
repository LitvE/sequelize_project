import {Task} from '../db/models';
import {User} from '../db/models';

//controller for creating Task
//НЕ РАБОТАЕТ... userId NULL
export async function createTask (req, res){
    
    try {
        const {body} = req;
        
        const newTask = await Task.create(body);
        if(newTask){
            return res.status(201).send(newTask);
        }else{
            return new Error();
        }
    } catch (error) {
        console.log(error);
    }
};

//controller for deleting Task 
export async function deleteTaskById (req, res){
    try {
        const taskToDelete = await Task.destroy({
            where: {
                id: req.params.taskId,
            }
        });
        if(taskToDelete){
            return res.send(`Task with id ${req.params.taskId} is deleted`);
        } else {
            return new Error();
        }
    } catch (error) {
        console.log(error);
    }
};

//controller for getting one Task
export async function getTaskById (req, res){    
    try {
        const taskToGet = await Task.findByPk(req.params.taskId);
        if(taskToGet){
            return res.status(201).send(taskToGet);
        } else {
            return new Error();
        }
    } catch (error) {
        console.log(error);
    }
};

//controller for getting all Task
export async function getTasks (req, res){    
    try {
        const tasks = await Task.findAll();
        if(tasks){
            return res.status(201).send(tasks);
        } else {
            return new Error();
        }
    } catch (error) {
        console.log(error);
    }
};