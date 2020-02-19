const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

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

  socket.emit('message', 'Welcome!')
  socket.broadcast.emit('notification', {
    message: 'User Joined!',
    type: 'info'
  })

  socket.on('sendMsg', (message) => {
    console.log('message received ' + message);
    // socket.broadcast.emit('notification', 'User joined!')
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