const mongoose = require('mongoose')
// const { chatsDBconn } = require('../db/mongoose')

var ObjectId = (id) => mongoose.Types.ObjectId(id);

const ChatSchema = new mongoose.Schema({
  sender: {
    type: ObjectId,
    ref: "user"
  },
  text: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Chat", ChatSchema)