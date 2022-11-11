const {User} = require('../models');
const bcrypt = require('bcrypt');

const getAllUser = async () => {
    const users = await User.findAll({
        attributes: {
            exclude: ['password']
        }
    });
    if (!users) {
        throw new Error('NotFoundError');
    }
    return users;
}

const getUserById = async (userId,role,paramId) => {
    if (role === 'user' && userId != paramId) {
        throw new Error('ForbiddenError');
    }
    const user = await User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id : paramId
        }
    });
    if(!user) {
        throw new Error('NotFoundError');
    }
    return user;
}

const createUser = async (userData) => {
    userData.password = await bcrypt.hash(userData.password, 10);
    let user = await User.create(userData);
    user = {
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role
    }
    return user;
}

const updateUserById = async (userId, role, paramId, userData) => {
    if (role === 'user' && userId != paramId) {
        throw new Error('ForbiddenError');
    }
    let user = await User.findOne({
        where: {
            id: paramId
        }
    });
    if (!user) {
        throw new Error('NotFoundError');
    }
    console.log(userData);
    if(userData.password || userData.role) {
        delete userData.password;
        delete userData.role;
    }
    user = await User.update(userData, {
        where: {
            id : paramId
        }
    });
    user = await User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id : paramId
        }
    });
    return user;
}

const deleteUserById = async (userId, role, paramId) => {
    if(role === 'user' && userId != paramId) {
        throw new Error('ForbiddenError');
    }
    let user = await User.findOne({
        where: {
            id: paramId
        }
    });
    if (!user) {
        throw new Error('NotFoundError');
    }
    user = await User.destroy({
        where: {
            id : paramId
        }
    });
    return user;
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}

