const express = require('express');
const router = express.Router();
const {
  likePost,
  unlikePost,
} = require('../controllers/likeController');

// routes
router.route('/').post(likePost);
router.route('/unlike').post(unlikePost);

// export the router
module.exports = router;