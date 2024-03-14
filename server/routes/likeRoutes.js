const express = require('express');
const router = express.Router();
const {
  getLikes,
  likePost,
  unlikePost,
} = require('../controllers/likeController');

// routes
router.route('/').get(getLikes);
router.route('/like').post(likePost);
router.route('/unlike').post(unlikePost);

// export the router
module.exports = router;