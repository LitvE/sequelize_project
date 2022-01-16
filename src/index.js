//const bcrypt = require('bcrypt');
//import bcrypt from 'bcrypt';
//const {User} = require('./db/models');
//import {User} from './db/models';

/*CRUD*/

//Create
/*
const createPasswordHash = async password => {
    try{
        return bcrypt.hashSync(password, 10);
    } catch(e){
        console.log('error: create password');
    }
};

const createUser = async data => {
    try{
        data.passwordHash = await createPasswordHash(data.password);
        const createUser = await User.create(data);
        return createUser.get();
    } catch(e){
        throw e;
    }
};

createUser({
    firstName: 'TestNmame',
    lastName: 'TestSurname',
    email: 'test@gmail.com',
    login: 'testlogin',
    password: 'qwerty'
}).then(console.log).catch(console.err);*/


//Find
/*
const getUserById = async (id) => {
    try{
        return (await User.findByPk(id)).get();
    } catch(e){
        throw e;
    }
}

getUserById(12).then(console.log).catch(console.err);*/

//Update
/*
const updateUser = async (data, params) => {
    try{
        await User.update(data, {
            where: params,
        });
    }catch(e){
        throw e;
    }
}

updateUser({firstName: 'TestName'}, {id: 22}).then(console.log).catch(console.err);*/
/*
const deleteUser = async (params) => {
    try {
      await User.destroy({
        where: params,
      });
    } catch (e) {
      throw e;
    }
  };
  deleteUser({ id: 22 });*/

//import express from 'express';
//import {User} from './db/models';
//import router from './routes';

//const PORT = process.env.PORT || 5000;
/*
const app = express();
app.use(express.json());
app.use(router);*/

/*
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/user', async (req, res) => {
    try{
        const createdUser = await User.create(req.body);
        console.log(req.body);
        return res.send(createdUser);
    }catch(e){
        console.log(e);
    }
});
*/

//app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));

const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App is working on http://127.0.0.1:${PORT}`);
});