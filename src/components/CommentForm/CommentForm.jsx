import { useState } from "react";
import axios from "axios";
import "../CommentForm/CommentForm.scss";

const API_KEY = "e664b7b3-dc90-458e-8c0d-5f76b986358f";

function CommentForm({ photoId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return alert("Please fill out all fields.");

    axios
      .post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments`,
        { name, comment },
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      )
      .then(() => {
        setName("");
        setComment("");
        alert("Comment submitted!");
      })
      .catch((error) => console.error("Error submitting comment:", error));
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        name="comment"
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
