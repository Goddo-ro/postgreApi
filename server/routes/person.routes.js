const Router = require('express');
const router = new Router();
const PersonController = require('../controllers/person.controller');

router.post('/person', PersonController.createPerson);
router.get('/person', PersonController.getPersons);
router.get('/person/byName/:username', PersonController.getOnePersonByUsername);
router.get('/person/:id', PersonController.getOnePerson);
router.put('/person', PersonController.updatePerson);
router.delete('/person/:id', PersonController.deletePerson);

module.exports = router;
