const Perro = require('../models/perroModel');
const Adoptante = require('../models/adoptanteModel');
const Adopcion = require('../models/adopcionModel');

// Registrar adopción
exports.registrarAdopcion = async (req, res) => {
    const { idPerro, idAdoptante } = req.body;
    try {
        const perro = await Perro.findById(idPerro);
        if (perro && perro.estadoDeAdopcion === 'Disponible') {
            const adopcion = await Adopcion.create({ idPerro, idAdoptante });
            await perro.updateOne({ estadoDeAdopcion: 'Adoptado' });
            res.json(adopcion);
        } else {
            res.json({ mensaje: 'El perro no está disponible para la adopción' });
        }
    } catch (error) {
        res.json({ mensaje: 'Error al registrar la adopción' });
    }
};


// Historial de adopciones
exports.listarAdopciones = async (req, res) => {
    try {
        const adopciones = await Adopcion.find().populate('idPerro').populate('idAdoptante');
        res.json(adopciones);
    } catch (error) {
        res.json({ mensaje: 'Error al obtener el historial de adopciones' });
    }
};
