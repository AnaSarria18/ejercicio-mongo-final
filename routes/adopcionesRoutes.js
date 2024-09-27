const express = require('express');
const router = express.Router();
const adopcionesController = require('../controllers/adopcionesController');

router.post('/adopciones', adopcionesController.registrarAdopcion);
router.get('/adopciones', adopcionesController.listarAdopciones);

module.exports = router;
