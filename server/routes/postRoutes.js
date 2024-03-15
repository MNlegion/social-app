const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// routes
router.route("/").get(getPosts).post(protect, createPost);
router.route("/:id").get(getSinglePost).put(updatePost).delete(deletePost);

// export the router
module.exports = router;
