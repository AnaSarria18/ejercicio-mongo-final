const Perro = require('../models/perroModel');

// Registrar un perro
exports.registrarPerro = async (req, res) => {
    const { nombre, raza, edad, tamaño } = req.body;
    try {
        const nuevoPerro = await Perro.create({ nombre, raza, edad, tamaño });
        res.json(nuevoPerro);
    } catch (error) {
        res.json({ mensaje: 'Error al registrar un perro' });
    }
};

// perros disponibles
exports.listarPerrosDisponibles = async (req, res) => {
    try {
        const perrosDisponibles = await Perro.find({ estadoDeAdopcion: 'Disponible' });
        res.json(perrosDisponibles);
    } catch (error) {
        res.json({ mensaje: 'Error al obtener los perros disponibles' });
    }
};
