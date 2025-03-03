import "./CommentList.scss";

function CommentList({ comments }) {
  if (!comments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comment">
      <h3 className="comments__title-count">{comments.length} Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment--list">
          <div className="comment--header">
            <strong className="comment--name">{comment.name}</strong>
            <span className="comment--date">
              {new Date(comment.timestamp).toLocaleDateString()}
            </span>
          </div>
          <p className="comment--text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
