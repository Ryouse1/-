useEffect(() => {
  socket.on('commentBlocked', ({ reason }) => {
    alert(reason);
    // コメント入力欄を5分間無効化など
  });
  return () => socket.off('commentBlocked');
}, []);
