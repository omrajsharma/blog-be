const express = require('express');
const router = express.Router();
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const {createPost, getPosts} = require('../controllers/PostController')

// /api/v1/post
router.post('/', uploadMiddleware.single('file'), createPost)

// /api/v1/post
router.get('/', getPosts)

module.exports = router;