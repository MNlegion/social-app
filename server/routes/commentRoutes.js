const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getComments,
  createComment,
  getSingleComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');

// routes
router.post('/:postId', protect, createComment);
router.get('/:postId', getComments);
router.route('/:id').put(protect, updateComment).delete(protect, deleteComment);

// export the router
module.exports = router;