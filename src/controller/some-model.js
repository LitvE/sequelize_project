const {all} = require('express/lib/application');
const {SomeModel} = require('../db/models');

module.exports.createSomeModel = async (req, res, next) =>{
    //const {body} = req;
    const {data: {id: commentId}, body: commentData,} = req;
    const x = await SomeModel.create(commentData);
    res.status(201).send(x);
};