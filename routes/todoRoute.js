// API route definitions (the endpoints)

const express = require('express');
const router = express.Router();
const { getTodos, createTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/todoController.js');

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').get(getTodoById).put(updateTodo).delete(deleteTodo);

module.exports = router;