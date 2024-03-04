const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

// export the router
module.exports = router;