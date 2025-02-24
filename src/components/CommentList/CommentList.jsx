import "./CommentList.scss";

function CommentList({ comments }) {
  if (!comments) {
    return <div>Loading...</div>;
  }
  return (


    <div className="comment">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment--list">
          <strong className="comment--name">{comment.name}</strong>{comment.comment}
        </div>
      ))}
    </div>
  );
}

export default CommentList;