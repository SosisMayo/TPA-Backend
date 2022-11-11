const express = require('express');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

// Get All User
router.get('/', auth("getAllUsers"), userController.GetAllUser);

// Get User By Id
router.get('/:id', auth("getUserById"), userController.GetUserById);

// Create User
router.post('/', auth("createUser"), userController.CreateUser);

// Update User By Id
router.put('/:id', auth("updateUserById"), userController.UpdateUserById);

// Delete User By Id
router.delete('/:id', auth("deleteUserById"), userController.DeleteUserById);

module.exports = router;