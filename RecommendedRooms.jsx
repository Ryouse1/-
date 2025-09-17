import React, { useEffect, useState } from "react";

export default function RecommendedRooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("/api/rooms/recommended")
      .then(res => res.json())
      .then(setRooms);
  }, []);

  return (
    <div>
      <h2>おすすめルーム</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.number}>
            <a href={`/room/${room.number}`}>{room.title}（{room.type}）</a>
          </li>
        ))}
      </ul>
    </div>
  );
}