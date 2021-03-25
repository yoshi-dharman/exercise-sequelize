const express = require('express');
const router = express.Router();

const todoRouter = require("./todo.route");
const userRouter = require("./user.route");

const Todo = require('../models/todo.model');
const User = require('../models/user.model');

//Routes
router.use("/todo", todoRouter);
router.use("/user", userRouter);

router.get('/', (req, res) => {
    User.findAll({
        // include: [{
        //     model: Todo,
        //     required: true,
        // }],
        include: [Todo],
        order: [
            ['id', 'ASC'],
            [Todo,'id', 'ASC']
        ]
    })
    .then(result => {
        res.json({
            message: "todo app per user, .../todo or .../user",
            how_to_use: "/:id,  /todo,  /todo/:id,  /user,  /user/:id",
            data: result
        })
    })
});

router.get('/:id', (req, res) => {
    User.findOne({
        include: [Todo],
        where : {id : req.params.id}
    })
    .then(result => {
        if (result === null) {
            res.json({
                message: "not found",
            });
        } else {
            res.json({
                message: "success",
                data: result
            });
        }
    })
    .catch(e => {console.log(e)})
});

module.exports = router;