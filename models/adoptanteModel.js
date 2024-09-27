const mongoose = require('mongoose');

const adoptanteSchema = new mongoose.Schema({

    nombre: { 
        type: String, 
        required: true 
    },
    direccion: { 
        type: String, 
        required: true 
    },
    correo: { 
        type: String, 
        required: true }
});

module.exports = mongoose.model('Adoptante', adoptanteSchema);
