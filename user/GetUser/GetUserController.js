const Person = require('../../model/person');

const getPerson = async( req, res) =>{
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    console.error('Error finding people:', error.message);
    res.status(500).send('Server Error');
  }
}

module.exports = { getPerson }