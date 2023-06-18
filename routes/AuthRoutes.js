const express = require('express');
const router = express.Router();
const { register, login, profile, logout } = require('../controllers/AuthController');

// /api/v1/auth/register
router.post('/register', register);

// /api/v1/auth/login
router.post('/login', login);

// /api/v1/auth/profile
router.get('/profile', profile);

// /api/v1/auth/logout
router.get('/logout', logout);

module.exports = router;