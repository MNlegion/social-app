import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../features/auth/authSlice";
import Navigation from "../Navigation";

const SettingsPage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    newPassword: "",
    confirmPassword: "",
    darkMode: user.darkMode, // Assuming darkMode is a boolean field in user settings
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleDarkMode = () => {
    setFormData({ ...formData, darkMode: !formData.darkMode });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch an action to update user information
    dispatch(updateUserProfile(formData));
  };

  return (
    <>
      <Navigation />
      <div className="settings-page">
        <h2>User Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Dark Mode:</label>
            <input
              type="checkbox"
              name="darkMode"
              checked={formData.darkMode}
              onChange={handleToggleDarkMode}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </>
  );
};

export default SettingsPage;
