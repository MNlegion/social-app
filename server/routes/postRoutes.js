const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/postController');

// routes
router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).put(updatePost).delete(deletePost);


// export the router
module.exports = router;