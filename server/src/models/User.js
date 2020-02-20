const mongoose = require("mongoose")
// const { chatsDBconn } = require('../db/mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("User", UserSchema)
