const express = require('express');
const { route } = require('.');
const router = express.Router();

const { getAllTodo, getAllTodoByID, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");

router.get('/', getAllTodo);
router.get('/:id', getAllTodoByID);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;