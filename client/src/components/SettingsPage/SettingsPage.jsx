import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../features/auth/authSlice";
import Navigation from "../Navigation";
import SettingsForm from "./SettingsForm";

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

  return (
    <>
      <Navigation />
      
      <SettingsForm />

    </>
  );
};

export default SettingsPage;
