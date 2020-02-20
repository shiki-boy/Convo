const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/chat-app", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('connected'))
  .catch(err => console.log(err.message + '\n' + err.reason))