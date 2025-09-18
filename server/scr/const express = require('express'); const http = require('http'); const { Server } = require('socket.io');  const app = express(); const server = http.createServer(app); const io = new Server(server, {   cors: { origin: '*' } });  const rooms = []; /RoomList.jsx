import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://あなたのRenderサーバーURL'); // サーバーURL

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on('updateRooms', data => setRooms(data));
    return () => socket.off('updateRooms');
  }, []);

  const createRoom = () => {
    const name = prompt('新しいルーム名を入力');
    if (name) socket.emit('createRoom', name);
  };

  const joinRoom = (roomId) => {
    socket.emit('joinRoom', roomId);
    alert(`${roomId} に入室しました`);
  };

  return (
    <div>
      <button onClick={createRoom}>ルーム作成</button>
      <div>
        {rooms.map(r => (
          <div key={r.id} onClick={() => joinRoom(r.id)}>
            {r.name} ({r.users} 人)
          </div>
        ))}
      </div>
    </div>
  );
}
