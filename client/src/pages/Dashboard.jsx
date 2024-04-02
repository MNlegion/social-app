import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome back, {user.username}</p>

      <div>
        <h2>Posts</h2>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
        </ul>
      </div>
    </>

    
  );
}

export default Dashboard;
