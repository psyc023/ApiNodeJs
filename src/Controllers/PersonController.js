const Person = require('./PersonModel');

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.getAll();
    res.json(persons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.getById(id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ message: 'Person not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createPerson = async (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, estado } = req.body;
  try {
    const newPerson = await Person.create(nombre, apellidoPaterno, apellidoMaterno, estado);
    res.status(201).json(newPerson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updatePerson = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidoPaterno, apellidoMaterno, estado } = req.body;
  try {
    const updatedPerson = await Person.update(id, nombre, apellidoPaterno, apellidoMaterno, estado);
    if (updatedPerson) {
      res.json(updatedPerson);
    } else {
      res.status(404).json({ message: 'Person not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    await Person.delete(id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
