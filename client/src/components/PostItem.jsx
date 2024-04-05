import React from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

function PostItem({ post }) {
  const loggedInUserId = useSelector((state) => state.auth.user._id);

  const isCreator = post.user === loggedInUserId;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="info">
        <h5>@{post.username}</h5>
        <div>{new Date(post.createdAt).toLocaleString("en-US", { dateStyle: "short" })}</div>
      </div>
      {isCreator && (
        <button className="close" onClick={handleDelete}>
          <FaTrash />
        </button>
      )}
    </div>
  );
}

export default PostItem;
