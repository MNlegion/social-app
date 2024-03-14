const Like = require("../models/likeModel");

// Like a post
const likePost = async (req, res) => {
  res.send('Like a post');
}

// Unlike a post
const unlikePost = async (req, res) => {
  res.send('Unlike a post');
}

module.exports = {
  likePost,
  unlikePost
};