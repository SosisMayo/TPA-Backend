const {Todos} = require('../models');

// Get All Todos
const getAllTodo = async () => {
    const todos = await Todos.findAll();
    if (!todos) {
        throw new Error('NotFoundError');
    }
    return todos;
}

// Get All Todos By User Id
const getAllTodoByUserId = async (userId, role, paramId) => {
    if (role === 'user' && userId != paramId) {
        throw new Error('ForbiddenError');
    }
    const todos = await Todos.findAll({
        where: {
            user_id: userId
        }
    });
    if (!todos) {
        throw new Error('NotFoundError');
    }
    return todos;
}

// Get Todo By Id
const getTodoById = async (userId,id) => {
    const todo = await Todos.findOne({
        where: {
            id: id
        }
    });
    if (todo.userId != userId) {
        throw new Error('ForbiddenError');
    }
    if (!todo) {
        throw new Error('NotFoundError');
    }
    return todo;
}

// Create Todo
const createTodo = async (userId,todoData) => {
    const todo = await Todos.create({
        title: todoData.title,
        date: todoData.date,
        user_id: userId
    });
    if (!todo) {
        throw new Error('ValidationError');
    }
    return todo;
}

// Update Todo By Id
const updateTodoById = async (userId, role, id, todoData) => {
    let todo = await Todos.findOne({
        where: {
            id: id
        }
    });
    if (!todo) {
        throw new Error('NotFoundError');
    }
    if (role === 'user' && todo.user_id != userId) {
        throw new Error('ForbiddenError');
    }
    todo = await todo.update(todoData);
    await todo.save();
    return todo;
}

// Delete Todo By Id
const deleteTodoById = async (userId, role, id) => {
    const todo = await Todos.findOne({
        where: {
            id: id
        }
    });
    if (!todo) {
        throw new Error('NotFoundError');
    }
    if (role === 'user' && todo.userId != userId) {
        throw new Error('ForbiddenError');
    }
    await todo.destroy();
    return todo;
}

// Delete All Todos By User Id
const deleteAllTodoByUserId = async (userId, role, paramId) => {
    if (role === 'user' && userId != paramId) {
        throw new Error('ForbiddenError');
    }
    const todos = await Todos.findAll({
        where: {
            user_id: paramId
        }
    });
    if (todos.length === 0) {
        throw new Error('NotFoundError');
    }
    await Todos.destroy({
        where: {
            user_id: paramId
        }
    });
    return todos;
}

// Delete All Todos
const deleteAllTodo = async () => {
    const todos = await Todos.findAll();
    if (!todos) {
        throw new Error('NotFoundError');
    }
    todos.forEach(async (todo) => {
        await todo.destroy();
    });
    return todos;
}

module.exports = {
    getAllTodo,
    getAllTodoByUserId,
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById,
    deleteAllTodoByUserId,
    deleteAllTodo
}
