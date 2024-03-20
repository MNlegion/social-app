const Post = require("../models/postModel");
const User = require("../models/userModel");

const getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    throw new Error("No posts found");
  }

  res.status(200).json(posts);
};

const createPost = async (req, res) => {
  const { title, body } = req.body;

  const post = new Post({
    title,
    body,
    user: req.user._id,
  });

  await post.save();

  if (!post) {
    throw new Error("Failed to create post");
  } else {
    res.status(201).json(post);
  }
};

const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to get post" });
  }
};

const updatePost = async (req, res) => {
  const { title, body, tags } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Not authorized" });
    }
    post.title = title;
    post.body = body;
    post.tags = tags;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Not authorized" });
    }
    await post.deleteOne();
    res.status(200).json({ message: "Post removed" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove post" });
  }
};

// exports
module.exports = {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};
