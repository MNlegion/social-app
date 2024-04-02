import axios from "axios";

const API_URL = "/api/posts/";

// Fetch all posts
const fetchPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Fetch single post
const fetchPost = async (id) => {
  const response = await axios.get(API_URL + id);

  return response.data;
};

// Create new post
const createPost = async (post) => {
  const response = await axios.post(API_URL, post);

  return response.data;
};

// Update post
const updatePost = async (post) => {
  const response = await axios.put(API_URL + post.id, post);

  return response.data;
};

// Delete post
const deletePost = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data;
};

const postService = {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
};

export default postService;
