const Adoptante = require('../models/adoptanteModel');

// Registrar un adoptante
exports.registrarAdoptante = async (req, res) => {
    const { nombre, direccion, correo } = req.body;
    try {
        const nuevoAdoptante = await Adoptante.create({ nombre, direccion, correo });
        res.json(nuevoAdoptante);
    } catch (error) {
        res.json({ mensaje: 'Error al registrar un adoptante' });
    }
};


exports.verAdoptantes = async (req, res) => {
    try {
        const adoptantes = await Adoptante.find(); 
        res.json(adoptantes); 
    } catch (error) {
        res.json({ mensaje: 'Error al obtener los adoptantes' });
    }
};
