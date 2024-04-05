import React from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

function PostItem({ post }) {
  const loggedInUser = useSelector((state) => state.auth.user._id);

  const isCreator = post.user === loggedInUser;

  const handleDelete = () => {
    // Delete the post
  };

  return (
    <div className="post">
      <div>{new Date(post.createdAt).toLocaleString("en-US")}</div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {isCreator && (
        <button className="close" onClick={handleDelete}>
          <FaTrash />
        </button>
      )}
    </div>
  );
}

export default PostItem;
