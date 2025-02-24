import { useState, useEffect } from "react";
import axios from "axios";
import "../CommentForm/CommentForm.scss";
import CommentList from "../CommentList/CommentList"
const API_KEY = "e664b7b3-dc90-458e-8c0d-5f76b986358f";

function CommentForm({ photoId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
    const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchComments();
}, []);


  async function fetchComments() {
    try {
        const response = await axios.get(
            `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=e664b7b3-dc90-458e-8c0d-5f76b986358f`
        );

        setComments(response.data.sort((a, b) => b.timestamp - a.timestamp));

    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return alert("Please fill out all fields.");

    const CommentInput = {
      name: name,
      comment: comment,
    }

    axios
      .post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=e664b7b3-dc90-458e-8c0d-5f76b986358f`,
        CommentInput,
        {
          headers: {
          "Content-Type": "application/json",
        },
      }
      )
      .then(() => {
        setName("");
        setComment("");
        setComments([...comments]);
        alert("Comment submitted!");
      })
      .catch((error) => console.error("Error submitting comment:", error));
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
      <textarea
        name="comment"
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    <CommentList comments={comments}/>
    
    </>
  );
}

export default CommentForm;
