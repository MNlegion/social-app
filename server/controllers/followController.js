const Follow = require('../models/followModel');

// Follow a user
const followUser = async (req, res) => {
    res.send('Follow a user');
}

// Unfollow a user
const unfollowUser = async (req, res) => {
    res.send('Unfollow a user');
}

module.exports = {
    followUser,
    unfollowUser
};