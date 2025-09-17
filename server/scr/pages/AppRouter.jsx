import { useParams } from "react-router-dom";

export default function AppRouter() {
  const { roomNumber } = useParams();
  const host = window.location.host;

  if (host.startsWith("game.")) {
    return <GameStreamRoom roomNumber={roomNumber} />;
  }
  if (host.startsWith("radio.")) {
    return <RadioRoom roomNumber={roomNumber} />;
  }
  if (host.startsWith("trial.")) {
    return <TrialRoomViewer roomNumber={roomNumber} />;
  }
  return <div>不明なサイトです</div>;
}
