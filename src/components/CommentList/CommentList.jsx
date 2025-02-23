import "./CommentList.scss";

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <strong>{comment.name}</strong>: {comment.comment}
        </div>
      ))}
    </div>
  );
}

export default CommentList;