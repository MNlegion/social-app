const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  likePost,
  unlikePost,
} = require('../controllers/likeController');

// routes
router.route('/:postId').post(protect, likePost).delete(protect, unlikePost);

// export the router
module.exports = router;