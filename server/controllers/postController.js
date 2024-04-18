const Post = require("../models/postModel");
const User = require("../models/userModel");


// @desc Create a new post
// @route POST /api/posts
// @access Private
const createPost = async (req, res) => {
  if(!req.body.title || !req.body.content) {
    res.status(400);
    throw new Error("Title and body are required");
  }

  // create a new post
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    user: req.user._id,
    username: req.user.username,

    // check if an image was uploaded
    image: req.file ? req.file.path : "",
  });

  console.log(req.user)

  // get the logged in user
  const user = await User.findById(req.user._id);

  if (user) {
    user.posts.push(post._id);
    await user.save();
  } else {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(201).json(post);
};

// @desc Get all posts from all users
// @route GET /api/posts
// @access Public
const getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    throw new Error("No posts found");
  }

  res.status(200).json(posts);
};

// @desc Get all posts from a single user
// @route GET /api/posts/user/:id
// @access Public
const getUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.params.id });

  if (!posts) {
    throw new Error("No posts found");
  }

  res.status(200).json(posts);
};

// @desc Get a single post
// @route GET /api/posts/:id
// @access Public
const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new Error("Post not found");
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to get post" });
  }
};

// @desc Update a post
// @route PUT /api/posts/:id
// @access Private
const updatePost = async (req, res) => {
  const { title, content, tags } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new Error("Post not found");
    }
    if (post.user.toString() !== req.user._id.toString()) {
      throw new Error("You are not authorized to update this post");
    }
    post.title = title;
    post.content = content;
    post.tags = tags;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

// @desc Delete a post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = async (req, res) => {
  try {
    // Find the post to be deleted
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new Error("Post not found");
    }

    // Find the user who owns the post
    const user = await User.findById(post.user);
    if (!user) {
      throw new Error("User not found");
    }

    // Remove the ID of the deleted post from the user's posts array
    user.posts = user.posts.filter(postId => postId.toString() !== req.params.id);

    // Save the updated user document
    await user.save();

    // Delete the post document
    await post.deleteOne();

    // Send a success response
    res.status(200).json({ Success: "Post Deleted" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ Error: "Failed to delete post" });
  }
};


// exports
module.exports = {
  createPost,
  getPosts,
  getUserPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
