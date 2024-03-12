const Person = require('../../model/person');
const validatePerson = require('./Validation');

const createPerson = async (req, res) => {
  try {
    // Extract validated data from request object
    const { name, age } = req.validatedData;

    // Create a new Person instance and save it
    const person = new Person({ name, age });
    await person.save();

    // Respond with the created person
    res.status(201).json(person);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error, success: false, isAuth: false, result: [], errorCode: -1 });
  }
};

module.exports = { createPerson };
