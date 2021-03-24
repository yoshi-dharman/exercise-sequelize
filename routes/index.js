const express = require('express');
const router = express.Router();

const todoRouter = require("./todo.route");
const userRouter = require("./user.route");

const Todo = require('../models/todo.model');
const User = require('../models/user.model');

//Routes
router.get('/', (req, res) => {
    User.findAll({
        include: [{
            model: Todo,
            required: true,
        }],
        order: [
            ['id', 'ASC'],
        ],
    })
    .then(result => {
        console.log(result)
        res.json({
            message: "todo app per user, .../todo or .../user",
            data: result
        })
    })
    
});

router.use("/todo", todoRouter);
router.use("/user", userRouter);

module.exports = router;