const {User} = require('../models');
const bcrypt = require('bcrypt');
const userServices = require('./user.service')

const register = async (userData) => {
    userData.password = await bcrypt.hash(userData.password, 10);
    let user = await User.create(userData);
    if (!user) {
        throw new Error('ValidationError');
    }
    user = {
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role
    }
    return user;
}

const login = async (userData) => {
    try {
        let user = await User.findOne({
            where :{
                username: userData.username
            }
        });
        if (!user) {
            return Promise.reject(new Error('Invalid username or password'));
        }
        const isPasswordValid = await bcrypt.compare(userData.password, user.password); 
        if (!isPasswordValid) {
            return Promise.reject(new Error('Invalid username or password'));
        }
        user = {
            id: user.id,
            name : user.name,
            username: user.username,
            role : user.role
        }
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    register,
    login
}