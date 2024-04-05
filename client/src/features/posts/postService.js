import axios from "axios";

const API_URL = "/api/posts/";

// Create a new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);

  return response.data;
};

// Get all User's posts
const getUserPosts = async (userId) => {
  const response = await axios.get(`${API_URL}user/${userId}`);

  return response.data;
};



// export default postService;
const postService = {
  createPost,
  getUserPosts,
};

export default postService;