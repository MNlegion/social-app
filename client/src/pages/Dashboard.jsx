import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";

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
    <section className="heading">
      <h1>{user.username}'s Dashboard</h1>
    </section>

    <PostForm />
    </>
  );
}

export default Dashboard;
