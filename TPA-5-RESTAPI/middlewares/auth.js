const jwt = require('jsonwebtoken');

const rolesRight = {
    admin: ['getAllUsers', 'getUserById', 'createUser', 'updateUserById', 'deleteUserById', 'getAllTodo', 'getTodoById', 'getAllTodoByUserId', 'createTodo', 'updateTodoById', 'deleteTodoById', 'deleteAllTodo', 'deleteAllTodoByUserId'],
    user: ['getUserById', 'updateUserById', 'deleteUserById', 'deleteAllTodoByUserId','createTodo', 'updateTodoById', 'deleteTodoById', 'getTodoById', 'getAllTodoByUserId'],
}

const auth = (requiredRight) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userRole = decoded.role;
        if (rolesRight[userRole].includes(requiredRight)) {
            next();
        } else {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
}

module.exports = auth;

