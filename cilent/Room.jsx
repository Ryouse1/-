import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3001');

function Room({ roomId, user }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  // Live2D表示部分は別途SDK導入・実装
  
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
      {/* Live2Dモデル表示領域（SDKで追加） */}
      <canvas id="live2d-canvas" width="300" height="400"></canvas>
      <div>
        {comments.map((c, idx) => <div key={idx}><strong>{c.user}:</strong> {c.comment}</div>)}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendComment}>送信</button>
    </div>
  );
}

export default Room;
