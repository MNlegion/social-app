import axios from "axios";

const API_URL = "/api/posts/";

// Create a new post
const createPost = async (postData) => {
  const response = await axios.post(API_URL + postData);

  return response.data;
};



// export default postService;
const postService = {
  createPost,
};