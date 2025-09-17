import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io();

function Room({ roomId, user }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', roomId);
    socket.on('newComment', (data) => {
      setComments((prev) => [...prev, data]);
    });
    return () => socket.off('newComment');
  }, [roomId]);

  const sendComment = () => {
    socket.emit('sendComment', { roomId, user, comment: input });
    setInput('');
  };

  return (
    <div>
      <div>
        {comments.map((c, i) => (
          <div key={i}><strong>{c.user}:</strong> {c.comment}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendComment}>送信</button>
    </div>
  );
}
export default Room;