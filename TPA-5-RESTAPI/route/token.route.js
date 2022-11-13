const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/token.controller');
const auth = require('../middlewares/auth');

// Refresh Token
router.get('/refresh', auth('refresh'), tokenController.refresh);

module.exports = router;