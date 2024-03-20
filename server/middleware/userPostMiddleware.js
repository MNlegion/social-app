const mongoose = require('mongoose');
const User = require('../models/userModel');

const userPostMiddleware = async (doc, next) => {
    const Post = mongoose.model('Post');

    if (doc.posts.length > 0) {
        for (const postId of doc.posts) {
            const post = await Post.findById(postId);
            if (post) {
                post.userId = doc._id;
                await post.save();
            }
        }
    }
    next();
}

module.exports = {
    userPostMiddleware,
  };