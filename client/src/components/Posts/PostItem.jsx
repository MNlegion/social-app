import React from "react";
import { FaTrash, FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost, likePost } from "../../features/posts/postSlice";


function PostItem({ post }) {
  const loggedInUserId = useSelector((state) => state.auth.user._id);
  const isCreator = post.user === loggedInUserId;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Delete post
  const handleDelete = () => {
    dispatch(deletePost(post._id));
    return;
  };

  // Like post
  const handleLike = () => {
    if (!loggedInUserId) {
      navigate("/login");
      return;
    } else {
      dispatch(likePost(post._id));
    }
  };

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {post.image && (
        <img src={post.image} alt="User Post" style={{ maxWidth: "100%" }} />
      )}
      <div className="info">
        <button className="like" onClick={handleLike}>
          <FaHeart style={{ color: "#ff0000" }} />
          <span>{post.likes.length}</span>
        </button>
        <h5>@{post.username}</h5>
        <div className="created-at">
          {new Date(post.createdAt).toLocaleString("en-US", {
            dateStyle: "short",
          })}
        </div>
        {isCreator && (
          <button className="close" onClick={handleDelete}>
            <FaTrash />
          </button>
        )}
      </div>
    </div>
  );
}

export default PostItem;
