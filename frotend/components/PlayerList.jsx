export default function PlayerList({ players, currentUser, onReport }) {
  return (
    <ul>
      {players.map(p => (
        <li key={p.username}>
          <img src={p.icon} alt="" width={32} />
          {p.displayName}（@{p.username}）
          {currentUser.username !== p.username && (
            <button onClick={() => onReport(p.username)}>報告</button>
          )}
        </li>
      ))}
    </ul>
  );
}
