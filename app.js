const express = require('express');
const app = express();
const conexionDB = require("./config/db");

const perrosRoutes= require('./routes/perrosRoutes');
const adoptantesRoutes= require('./routes/adoptantesRoutes');
const adopcionesRoutes= require('./routes/adopcionesRoutes');

require('dotenv').config();
app.use(express.json());
conexionDB();


// Rutas
app.use('/api', perrosRoutes);
app.use('/api', adoptantesRoutes);
app.use('/api', adopcionesRoutes);


// Escuchando el puerto 4000
const port = process.env.port
app.listen(port, () => {
    console.log("servidor corriendo en puerto 4000")
});
