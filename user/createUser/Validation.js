const Joi = require('joi');

// Define a schema for input validation
const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required()
});

// Validation middleware function
const validatePerson = (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.validatedData = value; // Store validated data in request object
  next();
};

module.exports = validatePerson;
