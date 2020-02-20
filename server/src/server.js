const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { chatsDBconn } = require('./db/mongoose')
const Room = require('./models/Room')
const Chat = require('./models/Chat')
const User = require('./models/User')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
  // io.emit ==> to everyone
  // socket.emit ==> to that particular client
  // socket.broadcast ==> to everyone except that client

  console.log('New WebSocket connection')
  // socket.emit('message', 'Welcome!')

  socket.broadcast.emit('notification', {
    message: 'User Joined!',
    type: 'info'
  })

  socket.on('join', async (data) => {
    console.log('join');
    // const room = await Room.findOne({ name: data.roomName })
    //   .populate('members')
    // console.log(room);
    // socket.join(data.roomName)
  })

  socket.on('sendMsg', (message) => {
    console.log('message received ' + message);

    socket.broadcast.emit('msgReceived')
    // io.emit('message', message)
  })

  socket.on('disconnect', () => {
    socket.broadcast.emit('notification', {
      message: 'User left the chat',
      type: "info"
    })
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})

const mongoose = require('mongoose')

app.get('/test', async (req, res) => {
  // new Room({
  //   name: "test",
  //   members: [
  //     mongoose.Types.ObjectId("5e4e4ae1d32ac53f145c92d9"),
  //     mongoose.Types.ObjectId("5e4e4ae1d32ac53f145c92d8"),
  //   ],
  //   chats: []
  // }).save()
  Room
    .find({})
    .populate('members')
    .lean()
    .exec()
    .then(doc => {
      res.send(JSON.stringify(doc, null, 4));
      console.log(JSON.stringify(doc, null, 4));
    })
})
