import axios from "axios";

const API_URL = "/api/posts/";

const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const fetchPost = async (id) => {
  try {
    const response = await axios.get(API_URL + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

const createPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

const updatePost = async (post) => {
  try {
    const response = await axios.put(API_URL + post.id, post);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const response = await axios.delete(API_URL + id);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};

const postService = {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
};

export default postService;
