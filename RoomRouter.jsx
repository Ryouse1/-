import React from "react";
import GameStreamRoom from "./GameStreamRoom";
import RadioRoom from "./RadioRoom";
import TrialRoomViewer from "./TrialRoomViewer";

export default function RoomRouter({ roomInfo }) {
  switch(roomInfo.site) {
    case "game-site":
      return <GameStreamRoom roomInfo={roomInfo} />;
    case "radio-site":
      return <RadioRoom roomInfo={roomInfo} />;
    case "trial-site":
      return <TrialRoomViewer roomInfo={roomInfo} />;
    default:
      return <div>このルームのサイトは存在しません。</div>;
  }
}