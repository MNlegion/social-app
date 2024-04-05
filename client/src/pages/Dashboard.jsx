import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import { getUserPosts, reset } from "../features/posts/postSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getUserPosts(user._id));

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  return (
    <>
      <section className="heading">
        <h1>{user.username}'s Dashboard</h1>
      </section>

      <PostForm />

      <section className="content">
        <h2>Your Posts</h2>
        {posts.length === 0 ? (
          <p>No posts found</p>
        ) : (
          <ul className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Dashboard;
