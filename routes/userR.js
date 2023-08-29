const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middelware/authMiddleware');
const userController = require('../controllers/userController');

router.get('/profile', authenticateJWT, userController.getUserProfile);

module.exports = router;
