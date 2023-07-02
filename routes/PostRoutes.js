const express = require('express');
const router = express.Router();
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const {createPost} = require('../controllers/PostController')

// /api/v1/post
router.post('/', uploadMiddleware.single('file'), createPost)

module.exports = router;