const authServices = require('../services/auth.service');
const tokenServices = require('../services/token.service');

// Register
const register = async (req, res) => {
    try {
        const user = await authServices.register(req.body);
        const token = tokenServices.generateAuthTokens(user);
        res.status(201).json(
            {
                message: 'User created successfully',
                data : {
                    user,
                    token
                }
            }
        );
    } catch (error) {
        if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            })
        }
        else {
            res.status(400).json({
                message: error.message,
            })
        }
    }
}

// Login
const login = async (req, res) => {
    try {
        const user = await authServices.login(req.body);
        const token = tokenServices.generateAuthTokens(user);
        res.status(200).json({
            message: 'User logged in successfully',
            data: {
                user,
                token
            }
        })
    } catch (error) {
        if (error.message === 'ValidationError') {
            res.status(400).json({
                message: 'Validation Error'
            })
        }
        else if (error.message === 'NotFoundError') {
            res.status(404).json({
                message: 'User Not Found'
            })
        }
        else if (error.message === 'InternalServerError') {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
        else {
            res.status(400).json({
                message: error.message,
            })
        }
    }
}

module.exports = {
    register,
    login
}