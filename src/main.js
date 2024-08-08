// const express = require("express");
// const app = express()

// app.listen(3000)


// app.use(express.json())

// const taskRoutes = require('../src/routes/tareas.routes');
// app.use('/tasks', taskRoutes);

// console.log("servidor iniciado")

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const taskRoutes = require('../src/routes/tareas.routes');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/', taskRoutes);

app.listen(port, () => {
    console.log(`Servidor conectado en el puerto${port}`);
});
