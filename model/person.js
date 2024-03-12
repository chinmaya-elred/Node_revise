const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number
});

const user = mongoose.model('user', schema);

module.exports = user;
