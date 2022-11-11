const userServices = require('../services/user.service');
const tokenServices = require('../services/token.service');

// Get All User
const GetAllUser = async (req, res, next) => {
    try {
        const users = await userServices.getAllUser();
        res.status(200).json({
            message: 'Successfully get all user',
            data: users
        });
    } catch (error) {
        if (error.name === 'NotFoundError') {
            res.status(404).json({
                message: 'User not found'
            });
        }   
        else if (error.name === 'ValidationError') {
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

// Get User By Id
const GetUserById = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const user = await userServices.getUserById(thisUser.id,thisUser.role,req.params.id);
        res.status(200).json({
            message: 'Successfully get user',
            data: user
        });
    } catch (error) {
        if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'User Not Found'
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

// Create User
const CreateUser = async (req, res) => {
    try {
        const user = await userServices.createUser(req.body);
        res.status(201).json({
            message: 'User created successfully',
            data: {
                user
            }
        });
    } catch (error) {
        if(error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'User Not Found'
            });
        }
        else if (error.message === 'InternalServerError') {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        else {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}

// Update User By Id
const UpdateUserById = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        const user = await userServices.updateUserById(thisUser.id, thisUser.role, req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully updated user',
            data: user
        });
    } catch (error) {
        if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'User Not Found'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

// Delete User By Id
const DeleteUserById = async (req, res) => {
    try {
        const thisUser = tokenServices.verifyToken(req.headers.authorization);
        await userServices.deleteUserById(thisUser.id, thisUser.role, req.params.id);
        res.status(200).json({
            message: 'Successfully deleted user',
        });
    } catch (error) {
        if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            });
        }
        else if (error.message === 'ForbiddenError') {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'User Not Found'
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
    GetAllUser,
    GetUserById,
    UpdateUserById,
    DeleteUserById,
    CreateUser
}