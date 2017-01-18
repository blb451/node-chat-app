const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });
});

server.listen(3000, () => {
  console.log(`Server running on ${port}`);
});
