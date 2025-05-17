const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// express 서버 설정
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

io.on('connection', (socket) =>{
    console.log('새로운 사용자가 연결되었습니다: ',socket.id);
    socket.on('offer', (data)=>{
        console.log()
        socket.broadcast.emit('offer',data);
    })
      // Answer 이벤트 처리
  socket.on('answer', (data) => {
    console.log('Answer 받음:', data);
    socket.broadcast.emit('answer', data);
  });

  // ICE 후보 처리
  socket.on('ice-candidate', (data) => {
    console.log('ICE 후보 받음:', data);
    socket.broadcast.emit('ice-candidate', data);
  });

  // 연결 해제 이벤트 처리
  socket.on('disconnect', () => {
    console.log('사용자가 연결 해제되었습니다:', socket.id);
  });
});
// 서버 시작
server.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  });