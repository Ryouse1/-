import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RoomPage() {
  const { roomNumber } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [roomInfo, setRoomInfo] = useState(null);

  useEffect(() => {
    fetch(`/api/rooms/${roomNumber}`)
      .then(res => {
        if (res.status === 404) setNotFound(true);
        else return res.json();
      })
      .then(data => {
        if (data) setRoomInfo(data);
      });
  }, [roomNumber]);

  if (notFound) return <div style={{ color: 'red', fontSize: '2em', textAlign: 'center', marginTop: '40px' }}>ERROR 404 not found</div>;
  if (!roomInfo) return <div>Loading...</div>;
  // 通常のルーム表示
  return <YourRoomComponent roomInfo={roomInfo} />;
}
