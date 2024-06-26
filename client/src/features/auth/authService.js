import axios from "axios";

const API_URL = "/api/users/";

// Register a new user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login a new user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout a user
const logout = () => {
  localStorage.removeItem("user");
};

// Update user information
const updateUserProfile = async (userData) => {
  const response = await axios.put(API_URL + "profile", userData, {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  });

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateUserProfile,
};

export default authService;
