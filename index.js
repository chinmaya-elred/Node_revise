const express = require('express');
const connectDB = require('./db');
const Person = require('./model/person');
const routes = require('./route')

connectDB();

const app = express();

app.use(express.json());

app.use('/',  routes);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.post('/person', async (req, res) => {
//   try {
//     const { name, age } = req.body;
//     const person = new Person({ name, age });
//     await person.save();
//     res.status(201).json(person);
//   } catch (error) {
//     console.error('Error saving person:', error.message);
//     res.status(500).send('Server Error');
//   }
// });

// app.get('/people', async (req, res) => {
//   try {
//     const people = await Person.find();
//     res.json(people);
//   } catch (error) {
//     console.error('Error finding people:', error.message);
//     res.status(500).send('Server Error');
//   }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
