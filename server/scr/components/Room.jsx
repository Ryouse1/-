useEffect(() => {
  socket.on('forceExit', () => {
    alert("配信が終了しました。ルームから退出します。");
    // ルーム画面からトップページなどに遷移
    window.location.href = "/";
  });
  return () => socket.off('forceExit');
}, []);
