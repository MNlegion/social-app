const express = require('express');
const router = express.Router();
const {} = require('../controllers/postController');

// routes
router.route('/').get(getPosts).post(createPost);


// export the router
module.exports = router;