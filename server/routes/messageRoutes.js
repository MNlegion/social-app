const express = require('express');
const router = express.Router();
const {
    createMessage,
    getMessages,
    getSingleMessage,
    updateMessage,
    deleteMessage,
} = require('../controllers/messageController');

// routes
router.route('/').get(getMessages).post(createMessage);
router.route('/:id').get(getSingleMessage).put(updateMessage).delete(deleteMessage);

// export the router
module.exports = router;