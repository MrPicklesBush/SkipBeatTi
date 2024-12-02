import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment({
        id: Date.now(),
        text: commentText,
        username: 'Current User', // Replace with actual user data
        timestamp: new Date().toISOString(),
      });
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default CommentForm;