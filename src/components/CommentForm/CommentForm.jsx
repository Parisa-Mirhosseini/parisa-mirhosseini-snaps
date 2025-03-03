import { useState, useEffect } from "react";
import axios from "axios";
import "../CommentForm/CommentForm.scss";
import CommentList from "../CommentList/CommentList"


function CommentForm({ photoId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(null);


  const BASE_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetchComments();
  }, []);


  async function fetchComments() {
    try {
      const response = await axios.get(
        `${BASE_URL}photos/${photoId}/comments`
      );

      setComments(response.data.sort((a, b) => b.timestamp - a.timestamp));

    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return alert("Please fill out all fields.");

    const newComment = {
      name,
      comment,
      timestamp: Date.now(),
    };


    setComments((prevComments) => [newComment, ...prevComments]);

    try {
      const response = await axios.post(
        `${BASE_URL}photos/${photoId}/comments`,
        newComment,
        {
          headers: { "Content-Type": "application/json" },
        }
      );


      setComments((prevComments) =>
        prevComments.map((c) =>
          c.timestamp === newComment.timestamp ? response.data : c
        )
      );
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment.");
    }
  };


  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
        
        Name
        <input className="comment-form__input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        Comment
        <textarea className="comment-form__textarea"
          name="comment"
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="comment-form__submit" type="submit">Submit</button>
      </form>
      <CommentList comments={comments} />

    </>
  );
}

export default CommentForm;
