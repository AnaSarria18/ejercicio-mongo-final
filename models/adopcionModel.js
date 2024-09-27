const mongoose = require('mongoose');

const adopcionSchema = new mongoose.Schema({

    idPerro: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Perro', 
        required: true 
    },
    idAdoptante: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Adoptante', 
        required: true 
    },
    fechaDeAdopcion: { 
        type: Date, default: Date.now }
});

module.exports = mongoose.model('Adopcion', adopcionSchema);
