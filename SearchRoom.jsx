import React, { useState } from "react";

export default function SearchRoom() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const search = async () => {
    const res = await fetch(`/api/rooms/search?keyword=${encodeURIComponent(query)}`);
    setResults(await res.json());
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="配信ルームを検索" />
      <button onClick={search}>検索</button>
      <ul>
        {results.map(room => (
          <li key={room.number}>
            <a href={`/room/${room.number}`}>{room.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}