const express = require('express');
const router = express.Router();
const perroController = require('../controllers/perrosController');

router.post('/perros', perroController.registrarPerro);
router.get('/perros', perroController.listarPerrosDisponibles);

module.exports = router;
