const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
require('./db/mongoose')
const cors = require('cors')
const Room = require('./models/Room')
const Chat = require('./models/Chat')
const User = require('./models/User')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(cors())

const port = process.env.PORT || 3000
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
  // io.emit ==> to everyone
  // socket.emit ==> to that particular client
  // socket.broadcast ==> to everyone except that client

  console.log('New WebSocket connection')


  socket.emit('notification', {
    message: 'Welcome',
    type: 'info'
  })

  socket.broadcast.emit('notification', {
    message: 'User Joined!',
    type: 'info'
  })

  socket.on('join', async (data, callback) => {
    console.log('join');
    const room = await Room.findOne({ name: data.room_name })
    console.log(room);
    if (!room) callback('No Such Room')

    console.log('123');
    socket.join(data.room_name)
    callback()
  })

  socket.on('sendMsg', (message) => {
    console.log('message received ' + message);
    socket.broadcast.emit('msgReceived')
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

  // c1 = await Chat.findById("5e4fabbaf2a2c93380846138")
  // c2 = await Chat.findById("5e4fabbaf2a2c93380846139")

  // const ans = await Room.findByIdAndUpdate("5e4eb0ae5bd52c3d8835987d", {
  // $push: {
  // chats: {$each: [c1._id, c2._id]}
  // }
  // })

  var ans = await Room.findOne({ name: "test" })
    .populate({ path: "members", model: User })
    .populate({
      path: "chats", model: Chat, options: { sort: { 'createdAt': 1 }, limit: 10 },
      populate: {
        path: 'sender', model: User, select: 'username -_id'
      }
    })
  console.log(ans)
  res.send(ans)
})
