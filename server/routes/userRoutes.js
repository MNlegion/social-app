const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// routes
router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

// export the router
module.exports = router;