const express = require('express');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const todoRouter = require('./todo.route');

const router = express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/todos', todoRouter);

module.exports = router;
