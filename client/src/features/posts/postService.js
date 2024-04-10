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

// Delete a post by ID
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}${postId}`, config)
  if(response.data){
    return postId;
  }

  return postId;
};

// Like a post
const likePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}likes/${postId}`, postId, config);
  if(response.data){
    return postId;
  }

  return response.data;
}

// export default postService;
const postService = {
  createPost,
  getUserPosts,
  deletePost,
  likePost,
};

export default postService;