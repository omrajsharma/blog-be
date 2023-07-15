const express = require('express');
const router = express.Router();
const {createPost, getPosts, getPost, updatePost} = require('../controllers/PostController')

// /api/v1/post
router.post('/', createPost)

// /api/v1/post
router.get('/', getPosts)

// /api/v1/post/:postId
router.get('/:postId', getPost)

// /api/v1/post/:postId
router.put('/:postId', updatePost )

module.exports = router;