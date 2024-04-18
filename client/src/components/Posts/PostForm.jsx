import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/posts/postSlice";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    // Append the title and content to the FormData object
    formData.append("title", title);
    formData.append("content", content);
    // Append the image to the FormData object
    if (image) {
      formData.append("image", image);
    }

    // Dispatch an action to create a new post with the provided title and content
    dispatch(createPost(formData));
    // Clear the input fields after submitting
    setTitle("");
    setContent("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
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
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default PostForm;
