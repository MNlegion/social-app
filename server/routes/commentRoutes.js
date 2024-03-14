const express = require('express');
const router = express.Router();
const {
  getComments,
  createComment,
  getSingleComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');

// routes
router.route('/').get(getComments).post(createComment);
router.route('/:id').get(getSingleComment).put(updateComment).delete(deleteComment);

// export the router
module.exports = router;