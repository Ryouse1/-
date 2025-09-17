import React from 'react';
import './CommentBox.css';

export default function CommentBox({ comments }) {
  return (
    <div className="comment-box">
      {comments.map((c, idx) => (
        <div className="comment-item" key={idx}>
          <strong>🎀 {c.user}:</strong> {c.comment}
        </div>
      ))}
    </div>
  );
}