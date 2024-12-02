import React from 'react';

function CommentItem({ comment }) {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <span className="username">{comment.username}</span>
        <span className="timestamp">{new Date(comment.timestamp).toLocaleString()}</span>
      </div>
      <p className="comment-text">{comment.text}</p>
    </div>
  );
}

export default CommentItem;