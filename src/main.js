// const express = require("express");
// const app = express()

// app.listen(3000)


// app.use(express.json())

// const taskRoutes = require('../src/routes/tareas.routes');
// app.use('/tasks', taskRoutes);

// console.log("servidor iniciado")

//const express = require('express');

import express, {json} from  "express"; 
import router from  "./routes/tareas.routes.js"
const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());

// Rutas
app.use('/', router);

app.listen(port, () => {
    console.log(`Servidor conectado en el puerto${port}`);
});
