const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const {generateMessage, generateLocationMessage} = require('./utils/message');

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', `Welcome to the chat app`));

  socket.broadcast.emit('newMessage', generateMessage('Admin', `New user joined`));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message)
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
