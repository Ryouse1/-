import React, { useState } from 'react';
import CuteButton from './components/CuteButton';
import CommentBox from './components/CommentBox';
import './App.css';

const initialComments = [
  { user: "みみ", comment: "こんにちは！かわいい部屋だね✨" },
  { user: "ぽよ", comment: "配信楽しみです🎀" }
];

function App() {
  const [comments, setComments] = useState(initialComments);
  const [input, setInput] = useState("");

  const sendComment = () => {
    if (input.trim() !== "") {
      setComments([...comments, { user: "あなた", comment: input }]);
      setInput("");
    }
  };

  return (
    <div className="app-root">
      <h1>かわいい配信ルームへようこそ🎀</h1>
      <CommentBox comments={comments} />
      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="コメントを入力…"
          style={{
            borderRadius: "12px",
            border: "1px solid #ffe6f2",
            padding: "8px 14px",
            fontFamily: "'M PLUS Rounded 1c', 'Noto Sans JP', sans-serif",
            fontSize: "1rem",
            marginRight: "8px"
          }}
        />
        <CuteButton onClick={sendComment}>送信</CuteButton>
      </div>
    </div>
  );
}

export default App;
