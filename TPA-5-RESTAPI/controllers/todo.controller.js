const todoServices = require('../services/todo.service');
const tokenServices = require('../services/token.service');


// Get All Todos
const GetAllTodo = async (req, res, next) => {
    try {
        const todos = await todoServices.getAllTodo();
        res.status(200).json({
            message: 'Successfully get all todo',
            data: todos
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo not found'
            });
        }
        else if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

// Get All Todos By User Id
const GetAllTodoByUserId = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const todos = await todoServices.getAllTodoByUserId(thisUser.id,thisUser.role,req.params.id);
        res.status(200).json({
            message: 'Successfully get all todo by user id',
            data: todos
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo Not Found'
            });
        }
        else if(error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

// Get Todo By Id
const GetTodoById = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const todo = await todoServices.getTodoById(thisUser.id, req.params.id);
        res.status(200).json({
            message: 'Successfully get todo',
            data: todo
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo Not Found'
            });
        }
        else if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

// Create Todo
const CreateTodo = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const todo = await todoServices.createTodo(thisUser.id, req.body);
        res.status(201).json({
            message: 'Todo created successfully',
            data: todo
        });
    } catch (error) {
        if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

// Update Todo By Id
const UpdateTodoById = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const todo = await todoServices.updateTodoById(thisUser.id, thisUser.role, req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully update todo',
            data: todo
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo Not Found'
            });
        }
        else if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

// Delete Todo By Id
const DeleteTodoById = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const todo = await todoServices.deleteTodoById(thisUser.id, thisUser.role, req.params.id);
        res.status(200).json({
            message: 'Successfully delete todo',
            data: todo
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo Not Found'
            });
        }
        else if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

// Delete All Todos By User Id
const DeleteAllTodoByUserId = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const todos = await todoServices.deleteAllTodoByUserId(thisUser.id, thisUser.role, req.params.id);
        res.status(200).json({
            message: 'Successfully delete all todo by user id',
            data: todos
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo Not Found'
            });
        }
        else if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

// Delete All Todos
const DeleteAllTodo = async (req, res) => {
    try {
        const todos = await todoServices.deleteAllTodo();
        res.status(200).json({
            message: 'Successfully delete all todo',
            data: todos
        });
    } catch (error) {
        if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'Todo Not Found'
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

module.exports = {
    GetAllTodo,
    GetTodoById,
    GetAllTodoByUserId,
    CreateTodo,
    UpdateTodoById,
    DeleteTodoById,
    DeleteAllTodoByUserId,
    DeleteAllTodo
}