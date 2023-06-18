const express = require('express');
const router = express.Router();
const { register, login, profile } = require('../controllers/AuthController');

// /api/v1/auth/register
router.post('/register', register);

// /api/v1/auth/login
router.post('/login', login);

// /api/v1/auth/profile
router.get('/profile', profile);

module.exports = router;