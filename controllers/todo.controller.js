const Todo = require('../models/todo.model');

module.exports = {
    getAllTodo: async (req, res) => {
        const todos = await Todo.findAll();
        res.json({
            message: "success",
            data: todos
        });
    },

    getAllTodoByID: async (req, res) => {
        const todos = await Todo.findOne({
            where: { id: req.params.id}
        });
        if (users === null) {
            res.json({
                message: "not found",
            });
        } else {
            res.json({
                message: "success",
                data: todos
            });
        }
    },

    addTodo: async (req, res) => {
        try{
            const newData = await Todo.create(req.body);

            res.status(200).json({
                message: "success add todo",
                data: newData
            });
        } catch (e){
            console.log(e);
        }
    },

    // updateTodo: async (req, res) => {
    //     try{
    //         const newData = await Todo.update(req.body, {
    //             where : {id : req.params.id},
    //         });

    //         console.log(newData);
    //         console.log(req.body);
    //         res.status(200).json({
    //             message: "success update todo",
    //             data: newData
    //         });
    //     } catch (e){
    //         console.log(e);
    //     }
    // },

    updateTodo: (req, res) => {
        Todo.update({todo : req.body.todo},{ 
            where: {id: req.params.id},
        })
        .then( result => {
            res.status(200).json({
                message: "success update todo",
                data: result
            });
        })
        .catch( e => {console.log(e)})
    },

    deleteTodo: async (req, res) => {
        try{
            const newData = await Todo.destroy({
                where : {id : req.params.id}
            });

            res.status(200).json({
                message: "success delete todo",
                data: newData
            });
        } catch (e){
            console.log(e);
        }
    },
}