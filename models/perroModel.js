const mongoose = require('mongoose');

const perroSchema = new mongoose.Schema({

    nombre: { 
        type: String, 
        required: true 
    },
    raza: { 
        type: String,
        required: true 
    },
    edad: { 
        type: Number, 
        required: true 
    },
    tamaño: { 
        type: String, 
        required: true 
    },
    estadoDeAdopcion: { 
        type: String, enum: ['Disponible', 'Adoptado'], default: 'Disponible' }
});

module.exports = mongoose.model('Perro', perroSchema);
