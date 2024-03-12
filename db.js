const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://chinmaya:Indus%408596@node-learning.uhmsia1.mongodb.net/person?retryWrites=true&w=majority');
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = connect;
