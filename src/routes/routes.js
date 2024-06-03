const express = require('express');
const router = express.Router();
const personController = require('./personController');

router.get('/persons', personController.getAllPersons);
router.get('/persons/:id', personController.getPersonById);
router.post('/persons', personController.createPerson);
router.put('/persons/:id', personController.updatePerson);
router.delete('/persons/:id', personController.deletePerson);

module.exports = router;
