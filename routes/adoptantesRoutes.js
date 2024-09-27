const express = require('express');
const router = express.Router();
const adoptantesController = require('../controllers/adoptantesController');

router.post('/adoptantes', adoptantesController.registrarAdoptante);
router.get('/adoptantes', adoptantesController.verAdoptantes);

module.exports = router;
