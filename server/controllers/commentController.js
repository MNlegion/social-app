const Comment = require('../models/commentModel');

// Create a new comment
const createComment = async (req, res) => {
    res.send('Create a new comment');
}

// Get all comments
const getComments = async (req, res) => {
    res.send('Get all comments');
}

// Get single comment
const getSingleComment = async (req, res) => {
    res.send('Get single comment');
}

// Update comment
const updateComment = async (req, res) => {
    res.send('Update comment');
}

// Delete comment
const deleteComment = async (req, res) => {
    res.send('Delete comment');
}

module.exports = {
    createComment,
    getComments,
    getSingleComment,
    updateComment,
    deleteComment
};

