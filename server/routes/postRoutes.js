const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createPost,
  getPosts,
  getUserPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// routes
router.route("/").get(getPosts).post(protect, createPost);
router.route("/user/:id").get(getUserPosts);
router.route("/:id").get(getSinglePost).put(protect, updatePost).delete(protect, deletePost);

// export the router
module.exports = router;
