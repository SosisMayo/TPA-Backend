const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const todoController = require('../controllers/todo.controller');

// Get All Todos
router.get('/', auth("getAllTodo"), todoController.GetAllTodo);

// Get All Todos By User Id
router.get('/user/:id', auth("getAllTodoByUserId"), todoController.GetAllTodoByUserId);

// Get Todo By Id
router.get('/:id', auth("getTodoById"), todoController.GetTodoById);

// Create Todo
router.post('/', auth("createTodo"), todoController.CreateTodo);

// Update Todo By Id
router.put('/:id', auth("updateTodoById"), todoController.UpdateTodoById);

// Delete Todo By Id
router.delete('/:id', auth("deleteTodoById"), todoController.DeleteTodoById);

// Delete Todo By User Id
router.delete('/user/:id', auth("deleteAllTodoByUserId"), todoController.DeleteAllTodoByUserId);

// Delete All Todos
router.delete('/', auth("deleteAllTodo"), todoController.DeleteAllTodo);

module.exports = router;