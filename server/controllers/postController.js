const Post = require("../models/postModel");

const getPosts = async (req, res) => {
  // try {
  //   const posts = await Post.find({});
  //   res.status(200).json(posts);
  //   console.log(posts);
  // } catch (error) {
  //   res.status(500).json({ message: "Server Error" });
  // }
};

const createPost = async (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400);
    throw new Error("Title and body are required");
  }

  const post = await Post.create({
    title: req.body.title,
    body: req.body.body,
    likes: [],
  });

  res.status(201).json(post);
};

const getSinglePost = async (req, res) => {};

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {};

// exports
module.exports = {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};
