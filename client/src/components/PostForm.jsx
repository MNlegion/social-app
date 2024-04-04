import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // Dispatch an action to create a new post with the provided title and content
    dispatch(createPost({ title, content }));
    // Clear the input fields after submitting
    setTitle("");
    setContent("");
  };

  return (
    <section className="form">
      <h2>Create a new post</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default PostForm;
